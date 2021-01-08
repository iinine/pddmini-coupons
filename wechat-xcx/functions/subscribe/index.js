'use strict';

const cloud = require('wx-server-sdk');
// 初始化 cloud
cloud.init({
    // API 调用都保持和云函数当前所在环境一致
    env: cloud.DYNAMIC_CURRENT_ENV
  })
const db = cloud.database();

exports.main = async (event, context, callback) => {
    try{
        const {OPENID} = cloud.getWXContext();
        const result = await db.collection('messages').add({
            data:{
                touser:OPENID,
                page:'pages/wmindex/index',
                templateId:event.templateId,
                done:false,
            },
        });
        return result;
    } catch (err){
        console.log(err);
        return err;
    }
};
