import PubSub from 'pubsub-js'
import moment from 'moment'
import request from '../../../utils/request'
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
    currentTimeFormat: '00:00', // 音乐播放的时候进度时间
    durationTimeFormat: '00:00', //  当前音乐的总时长
    currentWidth: 0, // 实时进度条的长度
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
  
    this.getMusicInfoById(musicId);
    // 生成控制背景音乐播放的实例
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.backgroundAudioManager.onTimeUpdate(() => {
      // this.backgroundAudioManager.currentTime: 实时的时间， 单位是s
      // console.log(this.backgroundAudioManager.currentTime);
      
      // 动态计算实时进度条的宽度
      // let {currentTime, duration} = this.backgroundAudioManager;
      // let currentWidth = currentTime / duration * 450;
      // let currentWidth = this.backgroundAudioManager.currentTime / this.backgroundAudioManager.duration * 450;
      
      this.setData({
        currentTimeFormat: moment(this.backgroundAudioManager.currentTime*1000).format('mm:ss'),
        currentWidth: this.backgroundAudioManager.currentTime / this.backgroundAudioManager.duration * 450
      })
    });
  
    // 监听音乐播放结束
    this.backgroundAudioManager.onEnded(() => {
      /*
      * 需要做的工作：
      *   1. 切换歌曲至下一首播放
      *   2. 还原实时进度条的长度位0，还原时候播放的时间为0
      * */
      
      this.setData({
        currentWidth: 0,
        currentTimeFormat: '00:00'
      })
      // @todo 发布消息，将切换歌曲的类型发送给 recommendSong 页面
      PubSub.publish('switchType', 'next');
      
      
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
      this.changeMusicPlay(true);
    })
    wx.onBackgroundAudioPause(() => {
      this.changeMusicPlay(false);
    })
    wx.onBackgroundAudioStop(() => {
      this.changeMusicPlay(false);
    })
    
   
    
    
    // @todo 订阅 recommend 发送的musicId消息
    PubSub.subscribe('musicId',  (msg, musicId) => {
      console.log('recommend发送过来的数据： ', msg, musicId);
      this.getMusicInfoById(musicId);
      // 自动播放
      this.musicControl(true, musicId);
    })
    
  },
  // 封装修改状态的功能函数
  changeMusicPlay(isPlay){
    this.setData({
      isPlay
    })
    appInstance.globalData.isMusicPlay = isPlay;
  },
  
  // 封装根据musicId获取音乐详情的方法
  async getMusicInfoById(musicId){
    let songData = await request('/song/detail', {ids: musicId});
    // moment格式化的时间单位是ms
    let durationTimeFormat = moment(songData.songs[0].dt).format('mm:ss');
    this.setData({
      song: songData.songs[0],
      musicId,
      durationTimeFormat
    })
  
    // 动态修改窗口标题
    wx.setNavigationBarTitle({
      title: this.data.song.name
    })
  },
  
  // 点击播放/暂停的回调
  handlePlay(){
    let isPlay = !this.data.isPlay;
    this.setData({
      isPlay
    })
    
    let {musicId, musicLink} = this.data;
    // musicLink: 1) 空串(未播放)   2) 有值(之前播放音乐的链接，只不过当前的音乐被暂停了)
    this.musicControl(isPlay, musicId, musicLink);
  },
  
  // 控制音乐播放/暂停
  async musicControl(isPlay, musicId, musicLink){
    // 1. 播放
    if(isPlay){
      // 从未播放过
      if(!musicLink){
        // @todo 根据音乐musicId获取音乐的播放链接信息并播放音乐
        // 1.1 发请求
        let musicLinkData = await request('/song/url', {id: musicId})
  
        this.setData({
          musicLink: musicLinkData.data[0].url
        })
        // 1.2 播放音乐 getBackgroundAudioManager全局唯一的对象
  
        this.backgroundAudioManager.src = this.data.musicLink;
        // title必填项
        this.backgroundAudioManager.title = this.data.song.name;
  
        // 在全局声明当前页面音乐在播放
        appInstance.globalData.musicId = musicId;
      }else {
        // 音乐暂停再播放
        this.backgroundAudioManager.play();
      }
    }else {
    // 2. 暂停
      this.backgroundAudioManager.pause();
      appInstance.globalData.isMusicPlay = false;
    }
  },

  // 切换歌曲
  switchSong(event){
    let type = event.currentTarget.id;
    
    // 停止当前音乐的播放
    this.backgroundAudioManager.stop();
    // @todo 发布消息，将切换歌曲的类型发送给 recommendSong 页面
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
