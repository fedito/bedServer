const { DataTypes } = require("sequelize");
const { db } = require("../database/connection");

const Tdr = db.define(
  "Tdr",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    bed: {
      type: DataTypes.INTEGER,
    },
    room: {
      type: DataTypes.INTEGER,
    },
    hospital: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.INTEGER,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    diagnosis: {
      type: DataTypes.STRING,
    },
    dischargeDate: {
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
);

module.exports = Tdr;
