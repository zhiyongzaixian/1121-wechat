import request from '../../utils/request.js'
import {
	CHANGEINDEXDATAMUTATION
}  from '../mutation-types.js'

const state = {
	initData: '初始化测试数据',
	indexData: {}, // 主页的数据
}


const mutations = {
	[CHANGEINDEXDATAMUTATION](state, indexData){
		state.indexData = indexData
	}
}


const actions = {
	async getIndexDataAction({commit}){
		// 1. 执行异步任务，获取数据
		let result = await request('/getIndexData')
		// 2. 调用mutation，将异步数据交给mutation
		result.code === 200 && commit(CHANGEINDEXDATAMUTATION, result.data)
	}
}

// let a = 'username'
// let obj = {
// 	[a]: 'kobe'
// }

// function fun(a){
// 	console.log(a)
// }
// fun(a)

const getters = {
	
}

export default {
	state,
	mutations,
	actions,
	getters
}