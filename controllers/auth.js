const bcryptjs = require("bcryptjs");
const { response, request } = require("express");
const ErrorCode = require("../error-handler/errorCode");
const ErrorException = require("../error-handler/errorException");
const { generateJWT } = require("../helpers/generateJWT");
const Hospital = require("../models/hospital");
const User = require("../models/user");

const login = async (req = request, res = response, next) => {
  const { dni, password } = req.body;

  const user = await User.findOne({ where: { dni } });

  if (!user) {
    throw new Error();
  }

  if (!bcryptjs.compareSync(password, user.password)) {
    return next(new ErrorException(ErrorCode.WrongPassword)) 
  }

  const token = await generateJWT(user.id);

  res.json({ user, token });
};

const register = async (req = request, res = response, next) => {
  const { dni, password, role, hospitalId } = req.body;

  const user = await User.findOne({ where: { dni } });

  if (user) {
    return next(new ErrorException(ErrorCode.UserAlreadyExists)) 
  }

  const hospital = await Hospital.findByPk(hospitalId);

  if(!hospital) {
    throw new Error();
  }

  const hashedPassword = bcryptjs.hashSync(password, 8);

  const newUser = await User.create({
    dni,
    password: hashedPassword,
    role,
    hospitalId
  });

  res.json(newUser);
};

const logout = async (req = request, res = response) => {
  res.json({ user: req.user, token: "" });
};

const deleteUser = async (req = request, res = response) => {
  const { dni } = req.body;

  const user = await User.destroy({ where: { dni } });

  if (!user) {
    throw new Error();
  }

  res.json(user);
};

const restoreUser = async (req = request, res = response) => {
  const { dni } = req.body;

  const user = await User.restore({ where: { dni } });

  if (!user) {
    throw new Error();
  }

  res.json(user);
};

module.exports = {
  login,
  register,
  logout,
  deleteUser,
  restoreUser,
};
