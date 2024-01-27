const express = require('express');
const session = require('express-session');
const cors = require('cors');
const port = 3001;
// const loginRouter = require('./routes/login');
// const { Sequelize } = require('sequelize');
const db_connection = require('./config/db_connection');
const sequelize = require('./config/sequelize');

const app = express();
app.use(express.json());
app.use(cors());


const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authenticationRoutes = require('./routes/authenticationRoutes');
const companyRoutes = require('./routes/companyRoutes');
const containPropositionRoutes = require('./routes/containPropositionRoutes');
const containReceiverRoutes = require('./routes/containReceiverRoutes');
const containViewerRoutes = require('./routes/containViewerRoutes');
const deadlineRoutes = require('./routes/deadlineRoutes');
const fileRoutes = require('./routes/fileRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const manageDeadlineRoutes = require('./routes/manageDeadlineRoutes');
const manageNotificationRoutes = require('./routes/manageNotificationRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const propositionRoutes = require('./routes/propositionRoutes');
const receiverRoutes = require('./routes/receiverRoutes');
const studentRoutes = require('./routes/studentRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const viewerRoutes = require('./routes/viewerRoutes');


app.use('/api/user', userRoutes); 
app.use('/api/admin', adminRoutes); 
app.use('/api/authentication', authenticationRoutes); 
app.use('/api/company', companyRoutes); 
app.use('/api/containProposition', containPropositionRoutes); 
app.use('/api/containReceiver', containReceiverRoutes); 
app.use('/api/containViewer', containViewerRoutes); 
app.use('/api/deadline', deadlineRoutes); 
app.use('/api/file', fileRoutes); 
app.use('/api/internship', internshipRoutes); 
app.use('/api/manageDeadline', manageDeadlineRoutes); 
app.use('/api/manageNotification', manageNotificationRoutes); 
app.use('/api/meeting', meetingRoutes); 
app.use('/api/notification', notificationRoutes); 
app.use('/api/proposition', propositionRoutes); 
app.use('/api/receiver', receiverRoutes); 
app.use('/api/student', studentRoutes); 
app.use('/api/tutor', tutorRoutes); 
app.use('/api/viewer', viewerRoutes); 


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/test-db', (req, res) => {
//   sequelize.authenticate()
//     .then(() => res.send('Database connection has been established successfully.'))
//     .catch(err => res.send('Unable to connect to the database:', err));
// });

sequelize.sync(/* { force: true } */)
  .then(() => console.log('Tables have been successfully created, if they were not existing before'))
  .catch(error => console.error('This error occured', error));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

