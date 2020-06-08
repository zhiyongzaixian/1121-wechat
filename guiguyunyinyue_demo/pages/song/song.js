import PubSub from 'pubsub-js'
import request from '../../utils/request'
const appInstance = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 音乐是否播放， 默认未播放
    song: {}, // 音乐的详情信息
    musicId: '', // 音乐的id标识
    musicLink: '', // 当前播放音乐的链接
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // options: 默认值为空对象， 用来接收路由跳转的时候的query参数，query会作为键值对导入子options对象中
    // url有长度限制，一旦超出了长度，会被截取掉
    // console.log(options.song);
    // console.log(typeof options.song);
    // Unexpected end of JSON input 原因： 往JSON.parse || JSON.stringify中放入的数据格式错误
    // let song =  JSON.parse(options.song)
    let musicId = options.musicId;
    // console.log('query参数： ', musicId);
    // jsDOC 根据指定的规范去设置js注释，用来描述函数的参数，类型等信息
    // @todo 发请求获取音乐详情，根据musicId
    let songData = await request('/song/detail', {ids: musicId})
    this.setData({
      song: songData.songs[0],
      musicId
    })
    
    // 动态修改窗口标题
    wx.setNavigationBarTitle({
      title: this.data.song.name
    })
    
    
    
    
    // 判断当前页面音乐是佛在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === musicId){
      // 当前页面的音乐在播放, 修改播放的状态
      this.setData({
        isPlay: true
      })
    }
    
    
    // @todo 监听音乐播放/暂停/停止 用于使得页面的播放状态同实际音乐的播放状态保持一致
    wx.onBackgroundAudioPlay(() => {
      this.setData({
        isPlay: true
      })
  
      appInstance.globalData.isMusicPlay = true;
    })
  
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isPlay: false
      })
      appInstance.globalData.isMusicPlay = false;
  
    })
  
    wx.onBackgroundAudioStop(() => {
      this.setData({
        isPlay: false
      })
      appInstance.globalData.isMusicPlay = false;
    })
    
  },
  
  // 点击播放/暂停的回调
  handlePlay(){
    let isPlay = !this.data.isPlay;
    this.setData({
      isPlay
    })
    
    let {musicId} = this.data;
    this.musicControl(isPlay, musicId);
  },
  
  // 控制音乐播放/暂停
  async musicControl(isPlay, musicId){
    // 1. 播放
    if(isPlay){
      // @todo 根据音乐musicId获取音乐的播放链接信息并播放音乐
      // 1.1 发请求
      let musicLinkData = await request('/song/url', {id: musicId})
      
      this.setData({
        musicLink: musicLinkData.data[0].url
      })
      // 1.2 播放音乐
      this.backgroundAudioManager = wx.getBackgroundAudioManager();
      this.backgroundAudioManager.src = this.data.musicLink;
      this.backgroundAudioManager.title = this.data.song.name;
      
      // 在全局声明当前页面音乐在播放
      appInstance.globalData.musicId = musicId;
    }else {
    // 2. 暂停
      this.backgroundAudioManager.pause();
      appInstance.globalData.isMusicPlay = false;
    }
  },

  
  // 切换歌曲
  switchSong(event){
    let type = event.currentTarget.id;
    console.log(type);
    
    // @todo 发布消息，将切换歌曲的类型发送给recommendSong页面
    PubSub.publish('switchType', type);
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
