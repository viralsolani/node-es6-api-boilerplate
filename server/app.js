const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const db = require('./models/index');

// Sync Sequelize Database
db.sequelize.sync()
  .catch(function (err) {
    console.log('Server failed to start due to error: %s', err);
  });

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // Register the Babel require hook
  require('babel-core/register');
}

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the first page.',
}));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));



module.exports = app;