// 引入
let mongoose = require('mongoose');

// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/class1121_mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

// 监听链接数据库是否成功
mongoose.connection.once('open', (err) => {
  if(err){
    console.log('链接数据库失败');
    console.log(err);
  }else {
    console.log('链接数据库成功');
  }
});

// 2. 创建Schema对象(约束对象)
const StudentsSchema = new mongoose.Schema({
  name: {
    type: String, // 字段的类型
    required: true, // 必要性
    unique: true, // 唯一性
  },
  age: Number,
  sex: {
    type: String,
    default: '1', // 女/男  0/1  支持可传，可不传
  },
  hobby: [String], // 要求传入的数据必须是数组，数组中的数据必须是字符串
  info: mongoose.SchemaTypes.Mixed // 任意类型数据，混合类型
})

// 3. 创建model(模型)对象
const StudentsModel = mongoose.model('students', StudentsSchema);


// 4. 创建文档对象
const studentA = new StudentsModel({
  name: '郭德纲',
  age: 47,
  hobby: ['美女', '高跟鞋', '相声'],
  info: '德云社班主'
})

// 5. 保存数据至集合中
studentA.save()
  .then(() => {
    console.log('保存数据成功');
  })
  .catch((err) => {
    console.log('保存数据失败');
    console.log(err);
  })



