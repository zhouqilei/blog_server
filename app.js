// 引入express框架
const express = require('express')
// 引入配置文件
const config = require('./config/index')
// 引入路由
const router = require('./routes/index')

// 开启数据库连接
require('./mongodb/index')
// 创建express实例
const app = express()

// 暴露公共文件夹
app.use(express.static('public'))

// 解析rquest
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json({}))


// 挂载路由
router.init(app)

// 监听端口
app.listen(config.port, () => {
  console.log('服务启动成功')
})