const Menu = require('../models/menu')

module.exports = {
  // 增加
  addMenu: async (req, res) => {
    try {
      const menu = await new Menu(req.body).save()
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
      const menu = Menu.findByIdAndDelete(req.body._id)
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
  // 修改
  updateMenu: async (req, res) => {
    try {
      const menu = Menu.findByIdAndUpdate(req._id, req.body)
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
  findMenus: async (req, res) => {
    try {
      const menus = await Menu.find(req.body)
      res.status(200).send({
        menus
      })
    } catch (error) {
      console.error(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  }
}