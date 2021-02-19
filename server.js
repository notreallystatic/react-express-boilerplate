const express = require('express'),
  cors = require('cors'),
  dotenv = require('dotenv'),
  bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/home', (req, res) => {
  res.send('hello world!');
});

app.listen(process.env.PORT || 5000, () => {
  console.log('server is running');
});
