const express = require('express')
const articleHandler = require('../controller/article')
const router = express.Router()

router.post('/add', articleHandler.addArticle)
router.post('/delete', articleHandler.deleteArticle)
router.post('/update', articleHandler.updateArticle)
router.post('/findOne',articleHandler.findArticle)
router.post('/findMany',articleHandler.findArticles)

module.exports = router