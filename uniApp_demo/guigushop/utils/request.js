import config from './config.js'

// 封装发送ajax请求的功能函数=
export default (url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.host + url,
			data,
			method,
			success: (res) => {
				console.log(res)
				resolve(res.data)
			},
			fail: (err) => {
				console.log(err)
				// reject(err)
				resolve(false); // 欺骗状态：为了保证后续代码的顺利执行，可以在失败的回调中执行resolve，同时传递一个失败的标识false
			}
		})
	})
}
