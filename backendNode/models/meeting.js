const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Meeting extends Model {}

Meeting.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('visit', 'defense'),
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'meeting',
  tableName: 'meeting',
});


module.exports = Meeting;