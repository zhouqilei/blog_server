const userRoute = require('./user')
const menuRoute = require('./menu')
const articleRoute = require('./article')
exports.init = app => {
  app.use('/user', userRoute)
  app.use('/menu', menuRoute)
  app.use('/article', articleRoute)
}