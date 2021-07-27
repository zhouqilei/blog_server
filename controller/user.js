
const User = require('../models/user')

const userHandler = {
  // 登录
  login: async (req, res) => {
    try {
      const {
        account,
        password
      } = req.body
      const user = await User.findOne({
        account,
        password
      })
      if (user) {
        res.status(200).send({
          user: {
            _id: user._id,
            account: user.account,
            name: user.name,
            avatar: user.avatar
          }
        })
      } else {
        res.status(200).send({
          errMsg: '账号或密码错误'
        })
      }
    } catch (error) {
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  // 注册
  register: async (req, res) => {
    try {
      const {
        name,
        account,
        password
      } = req.body
      if (!account || !password || !name) {
        res.status(500).send({
          errMsg: '请完整填写注册信息'
        })
      } else {
        // 判断用户是否已存在
        const user = await User.findOne({
          account
        })
        if (user) {
          res.status(200).send({
            errMsg: '用户已存在'
          })
        } else {
          const newUser = await new User(req.body).save()
          res.status(200).send({
            user: newUser
          })
        }
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  // 更新
  update: async (req, res) => {
    const body = req.body;
    try {
      let user = await User.findByIdAndUpdate(body._id, req.body)
      if (user) {
        res.status(200).send({

        })
      } else {
        res.status(200).send({
          errMsg: '未找到该用户'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  // 查询用户信息
  query: async (req, res) => {
    try {
      const {
        _id
      } = req.body
      let user = await User.findById(_id, '_id,name,avatar,account')
      if (user) {
        res.status(200).send({
          user
        })
      } else {
        res.status(200).send({
          errMsg: '未能查询到该用户'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  }
}

module.exports = userHandler