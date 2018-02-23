const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const CategoryController = require('./controllers/CategoryController')
const CategoryControllerPolicy = require('./policies/CategoryControllerPolicy')

const OptionController = require('./controllers/OptionController')
const OptionControllerPolicy = require('./policies/OptionControllerPolicy')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/authenticate', AuthenticationController.authenticate)

  app.post('/category', CategoryControllerPolicy.create, CategoryController.create)
  app.put('/category/:id', CategoryControllerPolicy.update, CategoryController.update)
  app.delete('/category/:id', CategoryController.delete)
  app.get('/category', CategoryController.findAll)
  app.get('/category/:id', CategoryController.findById)

  app.post('/option', OptionControllerPolicy.create, OptionController.create)
  app.put('/option/:id', OptionControllerPolicy.update, OptionController.update)
  app.delete('/option/:id', OptionController.delete)
  app.get('/option', OptionController.findAll)
  app.get('/option/:id', OptionController.findById)
}
