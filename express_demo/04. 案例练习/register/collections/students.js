let mongoose = require('mongoose');
// 2. 创建Schema对象， 对集合进行约束
const StudentsSchema = new mongoose.Schema({
  username: {
    type: String, // 字段的类型
    required: true, // 必要性
    unique: true, // 唯一性
  },
  password: Number,
  isDeleted: {
    type: Boolean,
    default: false // 用来表示数据是否被删除
  }
})

// 3. 创建model对象
const StudentsModel = mongoose.model('students', StudentsSchema);

// 向外暴露model对象
module.exports = StudentsModel;
