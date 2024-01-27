const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Viewer extends Model {}

Viewer.init({
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
  modelName: 'viewer',
  tableName: 'viewer',
});


module.exports = Viewer;