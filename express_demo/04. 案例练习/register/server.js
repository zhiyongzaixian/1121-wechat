require('./db')
let express  = require('express');
let cors = require('cors');
let StudentsModel = require('./collections/students')
const app = express();
/*
* 服务器处理路由的基本流程说明：
* 1. 获取请求参数
* 2. 处理请求逻辑
* 3. 返回响应数据
* */
// 使用中间键
// 原生cors解决跨域
/*app.use((req, res, next) => {
  // 设置响应头
  res.set({
    // 'Access-Control-Allow-Origin': 'http://localhost:63342'
    // 'Access-Control-Allow-Origin': '*'

    'Access-Control-Allow-Credentials': true, //允许后端发送cookie
    'Access-Control-Allow-Origin': req.headers.origin || '*', //任意域名都可以访问,或者基于我请求头里面的域
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', //设置请求头格式和类型
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',//允许支持的请求方式
    'Content-Type': 'application/json; charset=utf-8'//默认与允许的文本格式json和编码格式
  })

  next();
})*/
// 第三方中间键解决
app.use(cors())
// axios中post请求默认是 application/json   qs.string()
app.use(express.json())

// 注册路由
// 登录
app.post('/register', async (req, res, next) => {
  // 1. 获取请求参数
  // 1.1 通过以下的操作说明当前请求必须携带至少两个参数，且这两个参数的字段必须为： username, password
  let {username, password} = req.body;
  console.log(username, password);
  // 2. 处理请求逻辑
  // 2.1 判断当前用户名是否已经被注册
  /* 思路分析：
  * 1. 该用户已经被注册：
  *   返回数据，告知已经被注册
  * 2. 该用户之前没有注册
  *   将当前注册的信息存入至数据库中
  * */
  try{
    let result = await StudentsModel.findOne({username})
    // 如果数据库没有查询到指定的数据，结果是null
    if(result){ // 该用户已经被注册
      res.send({
        code: '502',
        msg: '该用户已经被注册'
      })
    }else { // 该用户之前没有注册
      // 将当前注册的信息存入至数据库中
      await StudentsModel.create({
        username, password: password>>>0
      })
      
      res.send({
        code: 200,
        msg: '注册成功'
      })
    }
  }catch (e) {
    console.log(e);
  
    res.send({
      code: 502,
      msg: '当前无法注册，请稍后再试'
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
