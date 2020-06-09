// pages/index/index.js
import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [], // 推荐数据
    topList: [], // 排行榜的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取banner数据
    let bannerListData = await request('/banner', {type: 2})
    console.log(bannerListData); //
    this.setData({
      bannerList: bannerListData.banners
    })
    
    // 获取推荐数据
    let recommendListData = await request('/personalized')
    this.setData({
      recommendList: recommendListData.result
    })
    
    // 获取排行榜的数据
    let idxs = [0, 1, 2, 3]; // 取排行榜数据的参数
    let num = 4;
    let index = 0; // 指针
    let topListArr = [];
    // while(index < idxs.length){
    while(index < num){
      let topListResult = await request(`/top/list?idx=${index++}`)
      let topListObj = {name: topListResult.playlist.name, tracks: topListResult.playlist.tracks.slice(0, 3)}
      topListArr.push(topListObj)
      this.setData({
        topList: topListArr
      })
    }
    // 在此处统一更新的话，需要等到所有的额请求全部到达以后才能显示，容器造成白屏
    // this.setData({
    //   topList: topListArr
    // })
    
  },
  
  // 跳转至recommendSong页面
  toRecommend(){
    wx.navigateTo({
      url: '/songs/pages/recommendSong/recommendSong'
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
