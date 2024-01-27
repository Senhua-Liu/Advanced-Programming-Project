const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class ManageNotification extends Model {}


ManageNotification.init({
  manageNotificationID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  notificationID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'notification',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'manageNotification',
  tableName: 'manageNotification',
});

module.exports = ManageNotification;