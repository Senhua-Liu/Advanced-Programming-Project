/* const { sequelize } = require('../config/sequelize'); 
const Meeting = require('../models/meeting'); 
const { meetingList } = require('../data/mockData'); 


sequelize.sync().then(() => {
    Meeting.destroy({
        where: {},
        truncate: true 
    })
    .then(() => {
        return Promise.all(meetingList.map(meeting => Meeting.create(meeting)));
    })
    .then(() => {
        console.log("All Emissions have been inserted successfully");
        sequelize.close(); 
    })
    .catch(error => {
        console.error("Error inserting Emissions:", error);
    });
});
 */


const sequelize = require('../config/sequelize');
const Meeting = require('../models/meeting');
const { meetingList } = require('../data/mockData');

const insertMeeting = async () => {
  await sequelize.sync();
  try {
    // await Meeting.destroy({ where: {}, truncate: true });
    for (const meeting of meetingList) {
      await Meeting.create(meeting);
    }
    console.log('Meetings inserted successfully.');
  } catch (error) {
    console.error('Failed to insert meetings:', error);
  } finally {
    await sequelize.close();
  }
};

insertMeeting();
