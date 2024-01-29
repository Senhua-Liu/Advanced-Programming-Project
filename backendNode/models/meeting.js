const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
class Meeting extends Model {}

Meeting.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('visit', 'defense'),
    allowNull: false,
  },
//   studentID: { type: DataTypes.INTEGER},
//   tutorEmail: { type: DataTypes.STRING},
  propositionList: { type: DataTypes.JSON}
//   propositionsIDList: {
//     type: DataTypes.JSON,  
//   }
}, {
  sequelize,
  modelName: 'meeting',
  tableName: 'meeting',
});


module.exports = Meeting;