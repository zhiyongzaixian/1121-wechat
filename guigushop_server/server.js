let Koa = require('koa');
let KoaRouter = require('koa-router');

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


// 注册返回主页数据的接口
let indexData = require('./datas/index.json');

router.get('/getIndexData', (ctx, next) => {
	ctx.body = indexData;
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
