const {sequelize, Category, User} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const categories = require('./categories.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(users.map(user => {
      User.create(user)
    }))

    await Promise.all(categories.map(category => {
      Category.create(category)
    }))
  })
