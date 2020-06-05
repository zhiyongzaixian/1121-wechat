import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 视频标签导航数据
    navId: '', // 导航的标识id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let videoGroupListData = await request('/video/group/list');
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    //
    this.getVideoList(this.data.navId)
  },
  // 获取视频列表数据的方法
  async getVideoList(navId){
    let videoListData = await request('/video/group', {id: navId});
    console.log(videoListData);
  },
  
  changeNavId(event){
    // 将str转换成number
    let navId = event.currentTarget.id>>>0;
    // console.log(navId, typeof navId); // string
    this.setData({
      navId
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
