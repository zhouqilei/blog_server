const express = require('express')
const menuHandler = require('../controller/menu')
const router = express.Router()

router.post('/add', menuHandler.addMenu)
router.post('/update', menuHandler.updateMenu)
router.post('/findOne', menuHandler.findMenu)
router.post('/findMany', menuHandler.findMenus)
router.post('/delete', menuHandler.deleteMenu)

module.exports = router