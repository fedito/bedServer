const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    throw new Error();
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRET);

    //TODO es uid o id???? verificar
    req.uid = uid;

    const user = "user";

    //verificar que el usuario sea ENABLED

    req.user = user;

    next();
  } catch (error) {
    throw new Error();
  }
};


module.exports = {
    validateJWT
}