let mongoose = require('mongoose');
// 1. 链接数据库
mongoose.connect('mongodb://localhost:27017/class1121_mongoose', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once('open', (err) => {
  if(err){
    console.log('链接数据库失败');
    console.log(err);
  }else {
    console.log('链接数据库成功');
  }
});


// 2. 创建Schema对象， 对集合进行约束
const StarsSchema = new mongoose.Schema({
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
  info: mongoose.SchemaTypes.Mixed, // 任意类型数据，混合类型
  isDeleted: {
    type: Boolean,
    default: false // 用来表示数据是否被删除
  }
})

// 3. 创建model对象
const StarModel = mongoose.model('stars', StarsSchema);

// 4. 通过model对象对数据进行CRUD操作
(async function () {
  try{
    // 1) create 增
    let result = await StarModel.create({
      name: 'kobe',
      age: 42,
      hobby: ['篮球'],
      info: '湖人球星'
    })
    
    // 2) read 查  find 和 findOne的区别： findOne找到对应的数据就停止查找，find会遍历所有的数据
    // let result = await StarModel.find()
    // let result = await StarModel.find({name:  'wade'})
    // let result = await StarModel.findOne({name:  'wade'})
    // let result = await StarModel.findOne({name:  'wade'}, {_id: 0, __v: 0})
    
    // 3) Update 更新
    // let result = await StarModel.updateMany({}, {$inc: {age: 1}})
    // let result = await StarModel.updateOne({name: 'curry'}, {$inc: {age: -1}})
    
    // 4) Delete 软删除 1. 给每个字段添加一个是否删除的标识isDeleted, 通过修改这个标识来判断当前数据是否可用
    // 注意： mongoose中有schema约束对象，如果约束中没有某个属性，后期不能通过update批量添加
    // let result = await StarModel.updateMany({}, {$set: {isDeleted: false}})
    console.log(result);
  }catch (e) {
    console.log('保存数据失败');
    console.log(e);
  }
})()



