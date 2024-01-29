
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class File extends Model {}

File.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
//   type: {
//     type: DataTypes.ENUM('final report', 'CdC', 'first self-evaluation form', 'second self-evaluation form', 'third self-evaluation form', 'intermediate evaluation form', 'final evaluation form', 'fiche visit'),
//     allowNull: false,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: true, 
//   },
//   confidentialLevel: {
//     type: DataTypes.ENUM('normal', 'sensitive'),
//     allowNull: false,
//   },
//   content: {
//     type: DataTypes.STRING,
//     allowNull: true, 
//   },
//   owner: {
//     type: DataTypes.ENUM('student', 'tutor'),
//     allowNull: false,
//   }
  schoolFiles: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  studentFiles: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  tutorFiles: {
    type: DataTypes.JSON,
    allowNull: true,
  }


}, {
  sequelize,
  modelName: 'file',
  tableName: 'file',
});

module.exports = File;