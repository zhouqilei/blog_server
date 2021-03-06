const mongoose = require('mongoose')
const config = require('../config/index')

mongoose.connect(config.DB_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const db = mongoose.connection;

db.once('open', () => {
  console.log('连接数据库成功')
})

db.on('error', (error) => {
  console.error('数据库发生错误' + error)
})

db.on('close', () => {
  console.log('数据库关闭了')
})

module.exports = db