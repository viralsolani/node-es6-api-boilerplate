import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { sanitizeModel } from "../utils/model-helper";

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env]; // eslint-disable-line
const db = {};

const {
  username,
  password,
  database,
  ...otherConfig
} = config;

const sequelize = new Sequelize(
  database, username, password, otherConfig,
);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {

    const model = sanitizeModel(
      sequelize,
      require(path.join(__dirname, file)).default
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
