
require('./db');

let StudentsModel = require('./collections/students')
let TeachersModel = require('./collections/teachers')

StudentsModel.create({
  name: '岳云鹏2',
  age: 32,
  hobby: ['美女', '高跟鞋', '相声'],
  info: '德云社一哥'
})

TeachersModel.create({
  name: '张晓飞',
  age: 37,
  hobby: ['美女', '代码', '台球'],
  info: '有魅力的老男人'
})
