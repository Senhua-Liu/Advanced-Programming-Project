const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class User extends Model {}


User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  
    primaryKey: true,
    allowNull: false,
  },
  firstName: { 
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: { 
    type: DataTypes.STRING 
  }
}, {
  sequelize,
  modelName: 'user',
  tableName: 'user',
});

module.exports = User;