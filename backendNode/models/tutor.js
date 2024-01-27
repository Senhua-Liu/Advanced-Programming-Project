const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Tutor extends Model {}

Tutor.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  companyID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'company',
      key: 'id',
    },
  },
  oldPassword: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telephone: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  sequelize,
  modelName: 'tutor',
  tableName: 'tutor',
});

module.exports = Tutor;