const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

/*  const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (env === 'development' || env === 'test') {
  // Register the Babel require hook
  require('babel-core/register');
}   */

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/', routes);

module.exports = app;