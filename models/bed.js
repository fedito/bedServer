const { DataTypes } = require("sequelize");
const { db } = require("../database/connection");
const Room = require("./room");

const Bed = db.define(
  "Bed",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    expectedDischarge: {
      type: DataTypes.DATE,
    },
    roomId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
  }
);

// Bed.belongsTo(Room);

module.exports = Bed;
