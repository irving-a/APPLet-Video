// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:"123",
        title:"第一个视频",
        videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      },
      {
        id: "456",
        title: "第二个视频",
        videoUrl: 'http://www.w3school.com.cn//i/movie.mp4'
      },
      {
        id: "789",
        title: "第三个视频",
        videoUrl:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      },
      {
        id: "147",
        title: "第四个视频",
        videoUrl: "https://www.bilibili.com/video/av76560081/",
      }
    ],
    src:" "

  },

  palyVideo:function(e){
    this.videoCtx.stop()

    //更新视频地址
    this.setData({
      src: e.currentTarget.dataset.url
    })

    this.videoCtx.play()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.videoCtx=wx.createVideoContext('myVideo')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})