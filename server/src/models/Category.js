
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

  return Category
}
