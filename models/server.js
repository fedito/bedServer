const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const { db } = require("../database/connection");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.bedsPath = "/api/beds";

    //DB connection
    this.connectDB();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  async connectDB() {
    try {
      await db.authenticate();
      console.log("DB Online");
    } catch (error) {
      throw new Error();
    }
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Body Parser
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    //public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.bedsPath, require("../routes/bed"));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
