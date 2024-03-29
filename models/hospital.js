const { DataTypes } = require("sequelize");
const { db } = require("../database/connection");
const Floor = require("./floor");

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

Hospital.hasMany(Floor, {
  foreignKey: "hospitalId",
});

module.exports = Hospital;
