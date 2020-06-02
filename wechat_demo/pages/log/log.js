// pages/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 123123
  },

  /**
   * 生命周期函数--监听页面加载 只执行一次
   */
  onLoad: function (options) {
    console.log('------ onLoad 监听页面加载-------')
    // 页面已经显示了
    // 逻辑层的数据已经可以流向视图层
    //debugger;
    // 通常在onLoad中发送ajax请求


  },

  /**
   * 生命周期函数--监听页面初次渲染完成 只执行一次
   */
  onReady: function () {
    console.log('------ onReady 监听页面初次渲染完成-------')
  },

  /**
   * 生命周期函数--监听页面显示 会执行多次
   */
  onShow: function () {
    console.log('------ onShow 监听页面显示-------')
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