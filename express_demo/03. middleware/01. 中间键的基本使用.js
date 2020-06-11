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
*   4. 扩展理解：
*     1) 中间键等同于拦截器
*     2) 中间键拦截什么：来自客户端的请求
*     3) 中间键什么时候开始拦截： 只要客户端的请求到达服务器端先被中间键拦截
*     4) 拦截目的： 针对请求做一些预处理的工作
*
* */
const express = require('express');
const app = express();



// 使用中间键
// app.use(中间键函数);
// app.use()直接使用中间键函数，可以接收到任何方法，任何路径的请求
/*
* 注意点：
*   1. 如果有连续的多个中间键函数被使用，不要在靠前的中间键函数中返回数据，容易导致后续中间键中(后续中间键中也返回数据)报错
*
*
* */
app.use((req, res, next) => {
  console.log('1111 中间键函数');
  next();
})

app.use((req, res, next) => {
  console.log('2222 中间键函数');
  res.send('222222中间键返回的数据');
})







app.listen('3001', (err) => {
  if(err){
    console.log('服务器启动失败');
    console.log(err);
  }else {
    console.log('服务器启动成功');
    console.log('服务器地址：http://localhost:3001');
  }
})
