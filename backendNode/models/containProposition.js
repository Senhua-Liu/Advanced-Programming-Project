const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class ContainProposition extends Model {}

ContainProposition.init({
  containPropositionID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  meetingID: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'meeting',
      key: 'id',
    },
  },
  propositionID: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'proposition',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'containProposition',
  tableName: 'containProposition',
});


module.exports = ContainProposition;