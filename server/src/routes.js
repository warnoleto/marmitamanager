const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const CategoryController = require('./controllers/CategoryController')
const CategoryControllerPolicy = require('./policies/CategoryControllerPolicy')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/authenticate', AuthenticationController.authenticate)
  app.post('/category', CategoryControllerPolicy.create, CategoryController.create)
  app.put('/category/:id', CategoryControllerPolicy.update, CategoryController.update)
  app.delete('/category/:id', CategoryController.delete)
  app.get('/category', CategoryController.findAll)
}
