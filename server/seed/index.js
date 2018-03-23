const {sequelize, Category, User, Option} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const categories = require('./categories.json')
const options = require('./options.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(users.map(user => {
      User.create(user)
    }))

    await Promise.all(categories.map(category => {
      Category.create(category)
    }))

    await Promise.all(options.map(option => {
      Option.create(option)
    }))
  })
