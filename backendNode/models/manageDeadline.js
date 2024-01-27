const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class ManageDeadline extends Model {}

ManageDeadline.init({
  manageDeadlineID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  deadlineID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'deadline',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'manageDeadline',
  tableName: 'manageDeadline',
});

module.exports = ManageDeadline;