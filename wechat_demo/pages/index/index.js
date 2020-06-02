// 注册小程序页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '初始化测试数据' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')

    /*
      数据流： 
      React || Vue || 小程序： 单项数据流 ： Model(数据层) ---> View(视图层)
      Vue： 通过指令v-model实现了双向数据绑定
    */ 

    /*
    修改状态数据
     1. React: this.setState()
        1）自身的钩子函数中(componentDidMount)：异步修改
        2) 非自身钩子函数中(setTimeout): 同步修改
     2. Vue： this.xxx = value
     3. 小程序： this.setData
    */ 
    setTimeout(() => {
      // this代表当前页面的实例对象
      this.setData({
        msg: '修改之后的数据'
      })
      /*
      
        1. 小程序中setData修改数据是同步的
        2. 小程序中没有像Vue一样实现数据劫持代理
      */
      console.log(this.data.msg);
    }, 2000)

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