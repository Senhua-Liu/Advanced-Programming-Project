const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Internship extends Model {}

Internship.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  
    primaryKey: true,
    allowNull: false,
  },
  companyID: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'company', 
      key: 'id',
    },
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM('L1', 'L2', 'M1', 'M2'),
    allowNull: true,
  },
  jobTitle: {
    type: DataTypes.STRING(255),
    allowNull: true, 
  },
  mission: {
    type: DataTypes.STRING(255),
    allowNull: true, 
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: true, 
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true, 
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: true, 
  },
  studentID: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'student',
      key: 'id',
    },
  },
  tutorID: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'tutor', 
      key: 'id',
    },
  }
}, {
  sequelize,
  modelName: 'internship',
  tableName: 'internship',
});

module.exports = Internship;