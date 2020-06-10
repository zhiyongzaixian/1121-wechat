let mongoose = require('mongoose');

// 2. 创建Schema对象， 对集合进行约束
const TeachersSchema = new mongoose.Schema({
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
const TeachersModel = mongoose.model('teachers', TeachersSchema);

// 向外暴露model对象
module.exports = TeachersModel;
