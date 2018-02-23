module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('Option', {
    description: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  })

  Option.associate = function (models) {
    Option.belongsTo(models.Category)
    models.Category.hasMany(Option, {as: 'options'})
  }

  return Option
}
