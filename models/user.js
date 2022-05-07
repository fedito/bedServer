const { DataTypes } = require("sequelize/types");
const { db } = require("../database/connection");

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
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = User;
