let express  = require('express');

const app = express();

/*
* 服务器处理路由的基本流程说明：
* 1. 获取请求参数
* 2. 处理请求逻辑
* 3. 返回响应数据
* */

// 注册路由

// 登录
app.get('/login', (req, res, next) => {
  // 1. 获取请求参数
  // 1.1 通过以下的操作说明当前请求必须携带至少两个参数，且这两个参数的字段必须为： username, password
  let {username, password} = req.query;
  
  // 2. 处理请求逻辑
  if(!username){
    res.status(502).send({
      code: 'fail',
      msg: '用户名不正确'
    })
  }else if(!password){
    res.status(502).send({
      code: 'fail',
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
