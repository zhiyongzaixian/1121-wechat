let express  = require('express');
let cors = require('cors');

const app = express();

/*
* 服务器处理路由的基本流程说明：
* 1. 获取请求参数
* 2. 处理请求逻辑
* 3. 返回响应数据
* */
// 使用中间键
// 原生cors解决跨域
// app.use((req, res, next) => {
//   // 设置响应头
//   res.set({
//     // 'Access-Control-Allow-Origin': 'http://localhost:63342'
//     // 'Access-Control-Allow-Origin': '*'
//
//     'Access-Control-Allow-Credentials': true, //允许后端发送cookie
//     'Access-Control-Allow-Origin': req.headers.origin || '*', //任意域名都可以访问,或者基于我请求头里面的域
//     'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
//     'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
//   })
//
//   next();
// })
// 第三方中间键解决
app.use(cors())

// 注册路由
// 登录
app.get('/login', (req, res, next) => {
  // 1. 获取请求参数
  // 1.1 通过以下的操作说明当前请求必须携带至少两个参数，且这两个参数的字段必须为： username, password
  let {username, password} = req.query;
  console.log(username, password);
  // 2. 处理请求逻辑
  if(!username){
    res.status(200).send({
      code: '502',
      msg: '用户名不正确'
    })
  }else if(!password){
    res.status(200).send({
      code: '502',
      msg: '密码不正确'
    })
  }else {
    res.status(200).send({
      code: 'ok',
      msg: '登录成功',
      data: {
        username,
        password
      }
    })
  }
})



app.listen('3000', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
  }
})
