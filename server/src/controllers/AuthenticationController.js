const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function invalidCredentials (res) {
  return res.status(403).send('Invalid user or password!')
}

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use!'
      })
    }
  },
  async authenticate (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: { email: email }
      })

      if (!user) {
        return invalidCredentials(res)
      }

      if (!user.comparePassword(password)) {
        return invalidCredentials(res)
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      console.log(err)
      return res.status(500).send('An Error ocurred trying to log in.')
    }
  }
}
