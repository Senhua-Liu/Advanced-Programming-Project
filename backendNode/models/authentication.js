const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Authentication extends Model {}

Authentication.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('login', 'search files'),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'authentication',
  tableName: 'authentication',
});



module.exports = Authentication;