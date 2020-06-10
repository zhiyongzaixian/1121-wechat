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

/*
* 返回的方式： res.<method>
*   res.end() 直接返回，
*   res.send() 根据返回的数据自动作出判断处理，再返回， 如： 如果返回的数据中是中文的内容，send会设置content-type：text/html;charset=utf-8
*   res.json() 直接返回， json数据
*   res.set()  设置响应头
*   res.cookie() 设置cookie
*   res.status() 设置响应状态码
*
* */


// 注册路由
// request(请求信息对象 - req), response(响应信息对象 - res)
app.get('/login/:index', (req, res) => {
  console.log('1111');
  console.log('query参数： ', req.query);
  console.log('params参数： ',req.params);
  // 设置响应头字段
  res.set({
    'content-type': 'text/html;charset=utf-8'
  })
  // 服务器返回数据的时候默认的编码格式是utf-8
  res.status(200).end('服务器返回的数据');
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
