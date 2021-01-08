
//app.js

App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        env: 'demo-4g5zv6qr65613d1b',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})