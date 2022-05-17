const { DataTypes } = require("sequelize");
const { db } = require("../database/connection");
const Hospital = require("./hospital");

const User = db.define(
  "User",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hospitalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    paranoid: true
  }
);

User.belongsTo(Hospital)

module.exports = User;
