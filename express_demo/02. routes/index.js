const express = require('express');
const app = express();

/*
* 接口文档：
*   method: 请求方法
*   url: 请求地址
*   data: 请求参数
* */


/*
* get请求参数：
*   1. query： url? + query参数 ---> 键值对的形式，多个键值对使用&拼接
*   2. params:
*     1) 注册路由需要声明占位符
*     2) 请求的时候需要填写实例的参数数据
* post请求参数：
*   1. query
*   2. params
*   3. 请求体参数：
*     1) 参数在请求体中
*     2) 获取： req.body
*     3) 请求体参数携带的数据量更大相比get方法的query方式
*     4) 数据放在请求体中不是以明文的方式在url中体现，比get请求更加安全
*
* */


// 注册路由
// request(请求信息对象 - req), response(响应信息对象 - res)
app.get('/login/:index', (req, res) => {
  console.log('1111');
  console.log('query参数： ', req.query);
  console.log('params参数： ',req.params);
  res.end('login success data');
});


app.post('/register/:id', (req, res) => {
  console.log('2222');
  console.log('post query参数： ',  req.query);
  console.log('post params参数： ', req.params);
  console.log('post 请求体参数： ', req.body);
  res.end('register success data');
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
