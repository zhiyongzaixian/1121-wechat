let express = require('express');
// 1. 生成应用的实例对象
const app = express();  // application

// 3. 注册路由
// 接口： get请求 /test
// request(请求信息对象), response(响应信息对象)
app.get('/test', (request, response) => {
  console.log(1111);
  response.end('test success data')
});

/*
* 接口： 请求test资源
* method: get
* url: /test
* 返回的数据： json
*
* */


app.post('/login', (request, response) => {
  console.log(2222);
  response.end('login success data')
});


// 2. 监听服务器端口号
app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3001');
  }
})
