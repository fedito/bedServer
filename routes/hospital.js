const { Router } = require("express");
const { check } = require("express-validator");
const { getHospital, getHospitals, postHospital, putHospital, deleteHospital } = require("../controllers/hospitals");

const {} = require('../middlewares')

const router = Router();

router.get("/",[], getHospitals)

router.get("/:id",[], getHospital)

router.post("/", [], postHospital)

router.put("/:id", [], putHospital)

router.post("/beds",[check('dni', 'DNI ')] , deleteHospital);

//en el check() se puede usar el metodo .custom() donde paso una funcion que puedo utilizar

module.exports = router;
