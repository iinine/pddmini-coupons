// pages/about/about.js
const app = getApp();
const tmplId = 'WzB5ckxWoAdTXNxOSmLWCQh_HbvhUIP17CxPCt52F0M';
import env from "../../env";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    otherMiniPrograms: env.otherMiniPrograms,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  onSubscribe:function(){
    console.log('订阅')
    wx.requestSubscribeMessage({
      tmplIds: [tmplId],
      success(res){
        if (res.errMsg === 'requestSubscribeMessage:ok'){
          // 将订阅的信息调用云函数存入云开发数据
          wx.cloud
            .callFunction({
              name: 'subscribe',
              data: {
                templateId: tmplId,
              },
            })
            .then(() => {
              wx.showToast({
                title: '订阅成功',
                icon: 'success',
                duration: 2000,
              });
            })
            .catch(() => {
              wx.showToast({
                title: '订阅失败',
                icon: 'success',
                duration: 2000,
              });
            });
        }
      },
      fail(err){
        console.warn(err);
      }
    })
  },
  topdd: function () {
    wx.navigateToMiniProgram({
      appId: env.pddAppId,
    });
  },
  toOtherMiniPrograms: function (e) {
    const index = e.currentTarget.dataset.index;
    wx.navigateToMiniProgram({
      appId: this.data.otherMiniPrograms[index].appId,
      path: this.data.otherMiniPrograms[index].path
    });
  },
  onShareAppMessage: function (res) {
      return {
              title: '这里有好多拼多多券饿了么美团外卖券滴滴花小猪打车券可以领取哦~',
              path: '/pages/index/index'
            }
  },
  onShareTimeline: function (res) {
      return {
        title: '这里有好多拼多多券饿了么美团外卖券滴滴花小猪打车券可以领取哦~',
        query: '点外卖打车买东西领券多实惠省钱'
      }
  }
});