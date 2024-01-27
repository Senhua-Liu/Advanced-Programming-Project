const express = require('express');
const session = require('express-session');
const cors = require('cors');
const port = process.env.PORT || 3001;
// const loginRouter = require('./routes/login');
// const { Sequelize } = require('sequelize');
const db_connection = require('./config/db_connection');
const sequelize = require('./config/sequelize');
const userRoutes = require('./routes/userRoutes');





const app = express();
app.use(cors());
app.use(express.json());

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

