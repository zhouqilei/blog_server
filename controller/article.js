const Article = require('../models/article')

module.exports = {
  addArticle: async (req, res) => {
    try {

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
      
    } catch (error) {
      console.info(error)
      res.status(500).send({
        errMsg: '系统异常'
      })
    }
  }
}