App({ // 创建整个应用的
  // 保存公共状态数据的
  /*
  * 思考：
  *   1. globalData 什么时候会被重置
  *     整个应用重新加载的时候
  *   2. 缓存什么数据
  *     isMusicPlay： 播放的状态
  *     musicId： 哪首音乐
  *
  * */
  globalData: {
    isMusicPlay: false, // 是否有音乐在播放
    musicId: '', // 音乐id标识
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
  
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
  
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
  
  }
})
