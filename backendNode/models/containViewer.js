const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class ContainViewer extends Model {}

ContainViewer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  fileID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'file',
      key: 'id',
    },
  },
  viewerID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'viewer',
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'containViewer',
  tableName: 'containViewer',
});


module.exports = ContainViewer;