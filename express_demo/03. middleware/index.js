/*
* 中间键：
*   1. 本质：函数
*   2. 作用：
*     1) 添加一些扩展功能
*     2) 处理请求头，响应数据
*     3) 调用下一个中间键
*   3. 体现形式：
*     1) (req, res, next) => {}
*     2) res: 请求信息对象
*     3) res: 响应信息对象
*     4) next: 负责调用下一个中间键
*
* */
const express = require('express');
const path =  require('path');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();


const app = express();


// express.static() 向外暴露静态资源
// express.json() 处理post请求参数  application/json
// express.urlencoded() 处理post请求参数 application/x-www-form-urlencoded

// 思考： 使用的express.json()返回值，返回值是一个函数，而且函数工作完自动调用了next方法
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// __dirname 绝对根路径
app.use(express.static(path.resolve(__dirname, 'public')))

// 第三方中间键 全局使用
// app.use(multipartMiddleware)

// 局部使用中间键： multipartMiddleware 必须放置在请求回调的前边
app.post('/login', multipartMiddleware, (request, response) => {
  console.log('body请求体参数； ', request.body);
  response.send('服务器返回的数据')
});

app.post('/login2', (request, response) => {
  console.log('body请求体参数； ', request.body);
  response.send('服务器返回的数据')
});


app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3001');
  }
})
