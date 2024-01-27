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
app.use('/api/user', userRoutes); 






app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/test-db', (req, res) => {
  sequelize.authenticate()
    .then(() => res.send('Database connection has been established successfully.'))
    .catch(err => res.send('Unable to connect to the database:', err));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

