const { Router } = require("express");
const { check } = require("express-validator");

const {} = require('../middlewares')

const router = Router();

router.get("/:id",[], getBed)

router.post("/", [], postBed)

router.put("/:id", [], putBed)

router.post("/beds",[check('dni', 'DNI ')] ,bedsPost);

//en el check() se puede usar el metodo .custom() donde paso una funcion que puedo utilizar

module.exports = router;
