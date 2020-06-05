// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 收集表单项数据
  handleInput(event){
    // 事件对象传参
    // console.log('data-的形式注入的数据： ', event.currentTarget.dataset.type);
    // console.log('id的形式注入的数据： ', event.currentTarget.id);
    let type = event.currentTarget.id;
    this.setData({
      [type]: event.detail.value
    })
    
  },
  
  // 处理登录的回调
  login(){
    
    // 1. 收集表单项数据
    let {phone, password} = this.data;
    // 2. 前端验证
    if(!phone || !password){
      // 前端验证不通过
      wx.showToast({
        title: '手机号/密码不正确',
        icon: 'none'
      })
    }else {
      // 前端验证通过
      // 3. 后端验证
    }
    
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
