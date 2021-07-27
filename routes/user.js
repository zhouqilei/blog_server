const express = require('express')
const userHandler = require('../controller/user')
const router = express.Router();

router.post('/login', userHandler.login)
router.post('/register', userHandler.register)
router.post('/update', userHandler.update)

module.exports = router;