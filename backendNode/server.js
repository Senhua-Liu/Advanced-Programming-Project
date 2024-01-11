const express = require('express');
const session = require('express-session');
const loginRouter = require('./login');

const app = express();
const port = 3000;

app.use(express.json());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use('/auth', loginRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});