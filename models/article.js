const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  content: String,
  user_id: String,
  menu_id: String
}, {
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})

const Article = mongoose.model('Article', articleSchema)
module.exports = Article