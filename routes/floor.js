const { Router } = require("express");
const { check } = require("express-validator");
const { getFloor, postFloor, putFloor, deleteFloor } = require("../controllers/floors");

const {} = require('../middlewares')

const router = Router();

router.get("/:id",[], getFloor)

router.post("/", [], postFloor)

router.put("/:id", [], putFloor)

router.post("/beds",[check('dni', 'DNI ')] , deleteFloor);

//en el check() se puede usar el metodo .custom() donde paso una funcion que puedo utilizar

module.exports = router;
