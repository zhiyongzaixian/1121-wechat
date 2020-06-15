import Vue from 'vue'
import Vuex from 'vuex' 
import indexData from './modules/index.js'
import cart from './modules/cart.js'

// 课堂问题： Vue.use调用底层做了什么事情

// 声明使用Vue
Vue.use(Vuex)

// 生成store对象
export default new Vuex.Store({
	modules: {
		indexData,
		cart
	}
})