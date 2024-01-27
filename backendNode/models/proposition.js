const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Proposition extends Model {}

Proposition.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  location: {
    type: DataTypes.ENUM('school', 'company', 'visio'),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'proposition',
  tableName: 'proposition',
});

module.exports = Proposition;