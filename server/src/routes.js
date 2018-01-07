module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'this server is perfectly running!'
    })
  })

  app.post('/register', (req, res) => {
    res.send({
      message: `user ${req.body.email} registered!`
    })
  })
}
