const { DataTypes } = require("sequelize/types");
const { db } = require("../database/connection");
const { Room } = require("./room");

const Hospital = db.define(
  "Hospital",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
  }
);

Hospital.hasMany(Room, {
  foreignKey: "hospitalId",
});

module.exports = Hospital;
