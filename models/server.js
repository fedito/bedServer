const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db } = require("../database/connection");
const errorHandler = require("../error-handler/errorHandler");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.hospitalsPath = "/api/hospitals";
    this.floorsPath = "/api/floors";
    this.roomsPath = "/api/rooms";
    this.bedsPath = "/api/beds";

    //DB connection
    this.connectDB();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();

    //Error handler
    this.errors()
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
    this.app.use(this.hospitalsPath, require("../routes/hospital"));
    this.app.use(this.floorsPath, require("../routes/floor"));
    this.app.use(this.roomsPath, require("../routes/room"));
    this.app.use(this.bedsPath, require("../routes/bed"));
  }

  errors() {
    this.app.use(errorHandler)
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
