import Vue from 'vue'
import App from './App'
import store from './store'

// 关闭生产模式下的一些提示
Vue.config.productionTip = false

 
// 声明App组件代表的是整个应用   mpType： 1) mp: 小程序 2) type: 类型
App.mpType = 'app' // app： application

// 生成Vue实例
const app = new Vue({
    ...App,
		store
})

// 挂载实例 === 原生小程序中App()
app.$mount()


// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })
