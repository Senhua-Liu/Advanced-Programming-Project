const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Admin extends Model {}


Admin.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  systemManager: {
    type: DataTypes.STRING,
    allowNull: true, 
  }
}, {
  sequelize,
  modelName: 'admin',
  tableName: 'admin',
});


module.exports = Admin;