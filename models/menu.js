const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const menuSchema = new Schema({
  name: String,
  user_id: String,
  priority: {
    type: Number,
    default: 0
  }
}, {
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})

const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu