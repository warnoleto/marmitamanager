module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'marmitamanager',
    user: process.env.DB_USER || 'marmitamanager',
    password: process.env.DB_PASS || 'marmitamanager',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './marmitamanager.sqlite',
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
