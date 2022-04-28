const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.bedsPath = "/beds";

    //Middlewares

    //Routes
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Body Parser
    this.app.use(express.json())

    //public directory
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.bedsPath, require("../routes/beds"));

    this.app.post("/", function (req, res) {
      res.json("Hello World");
    });

    this.app.put("/", function (req, res) {
      res.json("Hello World");
    });

    this.app.delete("/", function (req, res) {
      res.json("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
