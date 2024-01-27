const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Student extends Model {}


Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  year: {  // Promotion : 2028,2027,2026,2025,2024
    type: DataTypes.STRING, // L1, L2, L3, M1, M2
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'student',
  tableName: 'student',
});

module.exports = Student;