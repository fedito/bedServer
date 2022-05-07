const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth");

const { validateFields } = require("../middlewares/validateFields");

const router = Router();

router.post(
  "/login",
  [
    check("dni", "Invalid DNI").notEmpty(),
    check("password").notEmpty(),
    validateFields,
  ],
  login
);

//en el check() se puede usar el metodo .custom() donde paso una funcion que puedo utilizar

module.exports = router;
