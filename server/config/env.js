// import environmental variables from our .env file
require('dotenv').config();

// get config values
const config = require('./config');

// get the current environment
const env = process.env.NODE_ENV || 'development';

module.exports = config[env];
