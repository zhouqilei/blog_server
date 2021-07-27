const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  account: String,
  password: String,
  avatar: {
    type: String,
    default: ''
  }
}, {
  timestamps: {
    createdAt: 'createdTime',
    updatedAt: 'updatedTime'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User