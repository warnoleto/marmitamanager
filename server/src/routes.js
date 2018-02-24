const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const CategoryController = require('./controllers/CategoryController')
const CategoryControllerPolicy = require('./policies/CategoryControllerPolicy')

const OptionController = require('./controllers/OptionController')
const OptionControllerPolicy = require('./policies/OptionControllerPolicy')
const IsAuthenticated = require('./policies/IsAuthenticated')

module.exports = (app) => {
  app.post('/register', AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/authenticate', AuthenticationController.authenticate)

  app.post('/category', IsAuthenticated, CategoryControllerPolicy.create, CategoryController.create)
  app.put('/category/:id', IsAuthenticated, CategoryControllerPolicy.update, CategoryController.update)
  app.delete('/category/:id', IsAuthenticated, CategoryController.delete)
  app.get('/category', IsAuthenticated, CategoryController.findAll)
  app.get('/category/:id', IsAuthenticated, CategoryController.findById)

  app.post('/option', IsAuthenticated, OptionControllerPolicy.create, OptionController.create)
  app.put('/option/:id', IsAuthenticated, OptionControllerPolicy.update, OptionController.update)
  app.delete('/option/:id', IsAuthenticated, OptionController.delete)
  app.get('/option', IsAuthenticated, OptionController.findAll)
  app.get('/option/:id', IsAuthenticated, OptionController.findById)
}
