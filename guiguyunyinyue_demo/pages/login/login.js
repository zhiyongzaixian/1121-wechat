// pages/login/login.js
import request from '../../utils/request'

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
    // console.log(event);
    // console.log('data-的形式注入的数据： ', event.currentTarget.dataset.type);
    // console.log('id的形式注入的数据： ', event.currentTarget.id);
    // event.target VS event.currentTarget
    // target: event.target指向的对象一定是触发事件的对象但不一定是绑定事件的对象，如： 事件委托
    // currentTarget: event.currentTarget指向的对象一定是触发事件的对象同时也是绑定事件的对象
    let type = event.currentTarget.id;
    this.setData({
      [type]: event.detail.value
    })
    
  },
  
  // 处理登录的回调
  async login(){
    
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
      let result = await request('/login/cellphone', {phone, password, isLogin: true})
      console.log(result);
      /*
      * 状态码：
      *   1. 400： 手机号错误
      *   2. 502： 密码错误
      *   3. 200: 成功
      *
      * */
      
      if(result.code === 400){
        wx.showToast({
          title: '手机号错误',
          icon: 'none'
        })
      }else if(result.code === 502){
        wx.showToast({
          title: '密码错误',
          icon: 'none'
        })
      }else {
        // 登录成功
        wx.showToast({
          title: '登录成功',
          success: () => {
            // 将数据存储至本地
            wx.setStorage({
              key: 'userInfo',
              data: JSON.stringify(result.profile)
            })
            
            
            // 跳转至个人中心页: 注意！！！ 跳转至tabBar页面需要使用switchTab
            wx.switchTab({
              url: '/pages/personal/personal'
            })
          }
        })
        
        
      }
      
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
