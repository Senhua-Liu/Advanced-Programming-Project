const sequelize = require('../config/sequelize');
const File = require('../models/file');
const { fileList } = require('../data/mockData');

sequelize.sync({ force: false }).then(() => {
    File.destroy({
        where: {},
        truncate: true 
    })
    .then(() => {
        return Promise.all(fileList.map(file => File.create(file)));
    })
    .then(() => {
        console.log("All Files have been inserted successfully");
        sequelize.close(); 
    })
    .catch(error => {
        console.error("Error inserting Files:", error);
    });
});