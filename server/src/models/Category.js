
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    description: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    maxAllowed: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false
    }
  })

  const Option = sequelize.define('Option', {
    description: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  })

  Option.Category = Option.belongsTo(Category)
  Category.Option = Category.hasMany(Option, {as: 'options'})

  return Category
}
