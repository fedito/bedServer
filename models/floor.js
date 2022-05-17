const { DataTypes } = require("sequelize");
const { db } = require("../database/connection");
const Room = require("./room");

const Floor = db.define(
  "Floor",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    hospitalId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
  }
);

Floor.hasMany(Room, {
  foreignKey: "floorId",
});

module.exports = Floor;
