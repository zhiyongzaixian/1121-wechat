import request from '../../utils/request'
let startY = 0;
let moveY = 0;
let moveDistance = 0;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: '',
    coverTransition: '',
    recentPlayList: [], // 用户最近播放记录
    userInfo: {}, // 用户信息对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 判断用户是否登录
    let userInfo = wx.getStorageSync('userInfo');
    if(userInfo){
      this.setData({
        userInfo: JSON.parse(userInfo)
      })
      
      // 获取用户播放记录
      let recentPlayListData = await request('/user/record', {uid: this.data.userInfo.userId,type: 0})
      this.setData({
        recentPlayList: recentPlayListData.allData
      })
    }
  },
  
  handleTouchStart(event){
    // 1. 获取手指在界面的纵向坐标
    startY = event.touches[0].clientY;
    this.setData({
      coverTransition:  ''
    })
  },
  handleTouchMove(event){
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    // console.log(moveDistance);
    
    if(moveDistance <= 0){
      return
    }
    // 设置向下移动的临界值 80
    if(moveDistance >= 80){
      moveDistance = 80;
    }
    
    // 实时更新coverTransform的状态值
    this.setData({
      coverTransform: `translateY(${moveDistance}px)`
    })
    
  },
  handleTouchEnd(){
    this.setData({
      coverTransition:  'transform 1s ease',
      coverTransform: `translateY(0px)`
    })
  },
  // 跳转至登录页面
  toLogin(){
    if(this.data.userInfo.nickname){
      return;
    }
    wx.redirectTo({
      url: '/pages/login/login'
    })
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
