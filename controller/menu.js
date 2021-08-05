const moment = require('moment')
const Menu = require('../models/menu')

module.exports = {
  // 增加
  addMenu: async (req, res) => {
    try {
      const user_id = req.headers.user_id;
      const menu = await new Menu({
        user_id,
        ...req.body
      }).save()
      if (menu) {
        res.status(200).send({
          _id: menu._id
        })
      } else {
        res.status(200).send({
          errMsg: '添加菜单失败'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  // 删除
  deleteMenu: async (req, res) => {
    try {
      const menu = await Menu.findByIdAndDelete(req.body._id)
      if (menu) {
        res.status(200).send({})
      } else {
        console.info(111)
        res.status(200).send({
          errMsg: '该菜单不存在'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  // 修改
  updateMenu: async (req, res) => {
    try {
      const menu = await Menu.findByIdAndUpdate(req.body._id, req.body)
      if (menu) {
        res.status(200).send({})
      } else {
        res.status(200).send({
          errMsg: '该菜单不存在'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  // 查询
  findMenu: async (req, res) => {
    try {
      const menu = await Menu.findById(req.body._id)
      if (menu) {
        res.status(200).send({
          menu
        })
      } else {
        res.status(200).send({
          errMsg: '菜单不存在'
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  findMenus: (req, res) => {
    try {
      const user_id = req.headers['user_id']
      Menu.find({
        user_id
      }).sort('-priority').exec((err, docs) => {
        const menus = docs.map(doc => {
          return {
            priority: doc.priority,
            _id: doc._id,
            user_id: doc.user_id,
            name: doc.name,
            createdTime: moment(doc.createdTime).format('YYYY-MM-DD HH:MM:SS'),
            updatedTime: moment(doc.updatedTime).format('YYYY-MM-DD HH:MM:SS')
          }
        })
        res.status(200).send({
          menus
        })
      })
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  }
}
