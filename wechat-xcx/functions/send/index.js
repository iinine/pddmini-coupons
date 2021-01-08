// 云函数入口文件
const cloud = require('wx-server-sdk')


// 云函数入口函数
// todo: 查询条数限制，最大1000
// https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.limit.html
// 有人实际测试可以最大 10000
// https://developers.weixin.qq.com/community/develop/article/doc/000624c67c8b48611dba2b12058c13
// 1w条都不够用的话，可以先count，然后在limit之前加上skip
// db.collection('messages')
// .where({
//   done: true
// })
// .count()
exports.main = async (event, context) => {
  cloud.init()
  const db = cloud.database();
  const $ = db.command.aggregate;

  try {
    const messages = await db.collection('messages')
      .aggregate()
      .match({
        done: false,
      })
      // .skip(20 * (pageNum - 1))
      .limit(10000)
      .group({
        "_id": '$touser',
        "idList": $.addToSet("$_id")
      })
      .end();

      // "config": "0 30 10 * * * *"
      // console.log(messages);
    const sendPromises = messages.list.map(async msg => {
      try {
        // 发送订阅消息
        await cloud.openapi.subscribeMessage.send({
          "touser": msg._id,
          "templateId": "WzB5ckxWoAdTXNxOSmLWCQh_HbvhUIP17CxPCt52F0M",
          "page": "pages/wmindex/index",
          "data": {
            "thing1": {
              "value": "中午吃什么？点个外卖吧！"
            },
            "thing4": {
              "value": "红包天天领，能叠加使用，叫外卖更省钱"
            }
          }
        });

        // 发送成功后将消息的状态改为已发送
        return db.collection('messages')
          .doc(msg.idList[0])
          .update({
            data: {
              done: true,
            }
          });
      } catch (e) {
        return e;
      }
    });

    return Promise.all(sendPromises);
  } catch (err) {
    console.log(err);
    return err;
  }


}