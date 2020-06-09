import PubSub from 'pubsub-js'
import request from '../../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    month: '',
    recommendList: [],
    musicIndex: 0, // 标识音乐在当前列表的下标位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    
    let recommendListData = await request('/recommend/songs')
    this.setData({
      recommendList: recommendListData.recommend
    })
    
    
    // @todo 订阅 song 页面发布的消息
    PubSub.subscribe('switchType', (msg, switchType) => {
      let {musicIndex, recommendList} = this.data;
      // msg： 消息名称 data： 真正的数据
      console.log(msg, switchType);
      if(switchType === 'pre'){ // 上一首
        (musicIndex === 0) && (musicIndex = recommendList.length);
        musicIndex -= 1;
      }else { // next下一首
  
        (musicIndex === recommendList.length - 1) && (musicIndex = -1);
        musicIndex += 1;
      }
      
      // 更新musicIndex的状态数据
      this.setData({
        musicIndex
      })
      
      // 根据计算之后的musicIndex获取对应音乐对象中的 musicId
      let musicId = recommendList[musicIndex].id;
      // 将音乐id发送给 song 页面
      PubSub.publish('musicId', musicId)
    })
  },

  // 跳转至song页面
  toSong(event){
    // let song = event.currentTarget.dataset.song;
    // console.log(song, typeof song);
    let {id,  index} = event.currentTarget.dataset;
    
    // 修改musicIndex状态数据
    this.setData({
      musicIndex: index
    })
    
    // 路由跳转的时候可以通过query的形式传参
    wx.navigateTo({
      // url: '/pages/song/song?musicId=' + id
      url: `/songs/pages/song/song?musicId=${id}`
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
