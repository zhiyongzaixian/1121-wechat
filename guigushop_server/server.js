let Koa = require('koa');
let KoaRouter = require('koa-router');
let jwt = require('jsonwebtoken');
let Fly=require("flyio/src/node")
let fly=new Fly;

/* 
 koa框架： 用来搭建服务器，作用同express一样
 koa-router： koa的一个扩展库，中间键，用来搭建注册路由
 */

/* 
 自动化编译：
	nodemon：用来取代node命令， 可以实现自动化编译
		1. 下载安装： npm install nodemon
		2. 执行命令： nodemon server.js
 
 */

// 1. 生成应用的实例
const app = new Koa(); // express中不需要new, const app = express();
const router = new KoaRouter();
// 3. 注册路由
// 3.1 使用中间键函数： 1) router.routes()的返回值  2) router.allowedMethods()的返回值
app
	.use(router.routes())  // 声明使用路由
	.use(router.allowedMethods()) // 声明使用路由的方法



// 3.2 注册路由
// express: 请求的回调参数(req, res, next) req: 请求信息对象   res: 响应信息对象 next： 调用下一个中间键函数的函数
// koa: 请求的参数(ctx, next)  ctx === req + res
router.get('/test', (ctx, next) => {
	console.log(2222)
	console.log(ctx.query.a)
	// 返回数据 ： ctx.body = sendData
	ctx.body = 'koa服务器返回的测试数据'
})



// 主页导航页面数据
let indexCateList = require('./datas/indexCateList.json')
router.get('/getindexCateList', async (ctx, next) => {
	// 生成的H5应用存在跨域问题，通过CORS设置跨域配置
	ctx.set('Access-Control-Allow-Origin', '*')
	await new Promise(resolve => setTimeout(() => resolve(),2000))
	ctx.body = indexCateList;
});


// 分类页的数据
let cateGoryDatas = require('./datas/categoryDatas.json')
router.get('/getCateGoryDatas', async (ctx, next) => {
	ctx.body = cateGoryDatas;
});

// 注册返回主页数据的接口
let indexData = require('./datas/index.json');
router.get('/getIndexData', (ctx, next) => {
	ctx.body = {
		code: 200,
		data: indexData
	};
})


// 获取用户唯一标识openId的接口
router.get('/getOpenId', async (ctx, next) => {
	//  1. 获取请求参数code
	let code = ctx.query.code;
	// 2. 整合数据对接微信的服务器的接口
	let appId = 'wx810e8b1fde386fde'
	let appSecret = '654c697e90ad6e95dc344893a6879fe1'
	// 3. 发送请求对接微信服务器
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
	
	
	let result = await fly.get(url)
	console.log(result.data, typeof result.data)
	
	let userInfoObj = JSON.parse(result.data); 
	// openid: "oWYEK4ySgEw5F5WqzdjfXqqe_MNo"
	// session_key: "iXZ/tO6X6qPPRuo/h500JQ=="
	
	// 获取openId 进行加密处理
	let openId = userInfoObj.openid
	
	// 对openId进行加密，使用jwt
	let token = jwt.sign(openId, 'atguigu');
	console.log(token)
	// 测试token解密
	let testResult =  jwt.verify(token, 'atguigu')
	console.log('加密数据： ', testResult)
	console.log('加密之前： ', openId)
	ctx.body = token
})





// 2. 监听端口
app.listen('3001', (err) => {
	if(err){
		console.log('服务器启动失败')
		console.log(err);
	}else {
		console.log('服务器启动成功')
		console.log('服务器地址： http://localhost:3001');
	}
})
