const { Router } = require("express");
const { check } = require("express-validator");
const { getBed, postBed, putBed, deleteBed } = require("../controllers/beds");

const {} = require('../middlewares')

const router = Router();

router.get("/:id",[], getBed)

router.post("/", [], postBed)

router.put("/:id", [], putBed)

router.delete("/id", [], deleteBed)

//en el check() se puede usar el metodo .custom() donde paso una funcion que puedo utilizar

module.exports = router;
