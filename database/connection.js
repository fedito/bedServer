const { Sequelize } = require('sequelize');

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_NAME = process.env.DB_NAME || "mydb";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "mysql";
const DB_ENGINE = process.env.DB_ENGINE || "mysql";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_ENGINE,
  logging: false,
});

module.exports = { db };
