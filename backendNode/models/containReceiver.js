
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class ContainReceiver extends Model {}

ContainReceiver.init({
  id: {
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
  },
  receiverID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'receiver',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'containReceiver',
  tableName: 'containReceiver',
});

module.exports = ContainReceiver;