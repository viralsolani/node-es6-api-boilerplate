import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { sanitizeModel } from '../utils/model-helper';

// Get current environment values
const env = require('../config/env');

const basename = path.basename(module.filename);

// Get relevant values from env
const {
  username,
  password,
  database,
  ...otherConfig
} = env;

const sequelize = new Sequelize(
  database, username, password, otherConfig,
);

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0)
    && (file !== basename)
    && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sanitizeModel(
      sequelize,
      require(path.join(__dirname, file)).default,
    );

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
