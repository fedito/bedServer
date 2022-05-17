const { DataTypes } = require("sequelize");
const { db } = require("../database/connection");
const Bed = require("./bed");

const Room = db.define(
  "Room",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    floorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
  }
);

Room.hasMany(Bed, {
  foreignKey: "roomId",
});
// Room.belongsTo(Hospital);

module.exports = Room;
