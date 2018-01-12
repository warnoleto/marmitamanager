module.exports = (sequilize, DataTypes) =>
  sequilize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
