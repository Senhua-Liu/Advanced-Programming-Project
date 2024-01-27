const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Receiver extends Model {}

Receiver.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'user',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'receiver',
  tableName: 'receiver',
});

module.exports = Receiver;