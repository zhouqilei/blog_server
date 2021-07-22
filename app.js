// 引入express框架
const express = require('express')
// 引入配置文件
const config = require('./config/index')

const User = require('./models/user')

// 开启数据库连接
require('./mongodb/index')
// 创建express实例
const app = express()

app.get('/', (req, res) => {
  User.find((err, datas) => {
    if (err) throw err
    res.send({
      status: 200,
      data: datas
    })
  })
})


// 暴露公共文件夹
app.use(express.static('public'))

// 监听端口
app.listen(config.port, () => {
  console.log('服务启动成功')
})