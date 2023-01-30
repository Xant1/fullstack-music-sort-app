const { Sequelize } = require('sequelize');
const sequelize = require('../config/connection.js');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.music = require('./musicModel')

module.exports = db;
