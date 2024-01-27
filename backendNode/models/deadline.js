const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Deadline extends Model {}

Deadline.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('final report', 'first self-evaluation form', 'second self-evaluation form', 'third self-evaluation form', 'intermediate evaluation form', 'final evaluation form', 'defense'),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
  },
  alertBefore: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  modelName: 'deadline',
  tableName: 'deadline',
});

module.exports = Deadline;