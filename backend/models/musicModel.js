const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Music extends Model {}

Music.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    musician: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    song: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Music',
  }
);

module.exports = Music;
