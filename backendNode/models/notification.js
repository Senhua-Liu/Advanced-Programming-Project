
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Notification extends Model {}

Notification.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('private', 'public'), 
    allowNull: false,
  },
  alterDuration: {
    type: DataTypes.INTEGER,
  },
  avaliableFrom: {
    type: DataTypes.DATE,
  },
  avaliableTo: {
    type: DataTypes.DATE,
  },
  content: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  modelName: 'notification',
  tableName: 'notification',
});

module.exports = Notification;
