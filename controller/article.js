const Article = require('../models/article')
const moment = require('moment')
module.exports = {
  addArticle: async (req, res) => {
    try {
      const user_id = req.headers.user_id;
      const article = await new Article({
        user_id,
        ...req.body
      }).save()
      if (article) {
        res.status(200).send({
          _id: article._id
        })
      } else {
        res.status(200).send({
          errMsg: '添加文章失败'
        })
      }

    } catch (error) {
      console.info(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  deleteArticle: async (req, res) => {
    try {

    } catch (error) {
      console.info(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  updateArticle: async (req, res) => {
    try {

    } catch (error) {
      console.info(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  findArticle: async (req, res) => {
    try {

    } catch (error) {
      console.info(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  },
  findArticles: async (req, res) => {
    try {
      const user_id = req.headers.user_id;
      let query = Article.find({
        user_id,
        menu_id: req.body.menu_id
      });
      const count = await Article.count({
        user_id,
        menu_id: req.body.menu_id
      })
      if (req.body.num && req.body.size) {
        const num = req.body.num
        const size = req.body.size
        query = query.skip((num - 1) * size).limit(size)
      }
      query.exec((err, docs) => {
        if (err) throw err
        const articles = docs.map(doc => {
          return {
            _id: doc._id,
            menu_id: doc.menu_id,
            user_id: doc.user_id,
            title: doc.title,
            content: doc.content,
            createdTime: moment(doc.createdTime).format('YYYY-MM-DD HH:MM:SS'),
            updatedTime: moment(doc.updatedTime).format('YYYY-MM-DD HH:MM:SS')
          }
        })
        res.status(200).send({
          articles: articles,
          total: count
        })
      })
    } catch (error) {
      console.info(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  }
}
