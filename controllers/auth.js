const bcryptjs = require("bcryptjs");
const { response, request } = require("express");
const { generateJWT } = require("../helpers/generateJWT");
const User = require("../models/user");

const login = async (req = request, res = response) => {
  const { dni, password } = req.body;

  const user = await User.findOne({ where: { dni, enabled: true } });

  if (!user) {
    throw new Error();
  }

  if (bcryptjs.compareSync(password, user.password)) {
    throw new Error();
  }

  const token = await generateJWT(user.id);

  res.json({ user, token });
};

const register = async (req = request, res = response) => {
  const { dni, password, role } = req.body;

  const user = await User.findOne({ where: { dni } });

  if (user) {
    if (!user.enabled) {
      throw new Error();
    }
    throw new Error();
  }

  const hashedPassword = bcryptjs.hashSync(password, 8);

  const newUser = await User.create({
    dni,
    password: hashedPassword,
    role,
    enabled: true,
  });

  res.json(newUser);
};

const logout = async (req = request, res = response) => {
  res.json({ user: req.user, token: "" });
};

const deleteUser = async (req = request, res = response) => {
  const { dni } = req.body;

  const user = await User.findOne({ where: { dni, enabled: true } });

  if (!user) {
    throw new Error();
  }

  user.set({ enabled: false });

  await user.save();

  res.json(user);
};

const restoreUser = async (req = request, res = response) => {
  const { dni } = req.body;

  const user = await User.findOne({ where: { dni, enabled: false } });

  if (!user) {
    throw new Error();
  }

  user.set({ enabled: true });

  await user.save();

  res.json(user);
};

module.exports = {
  login,
  register,
  logout,
  deleteUser,
  restoreUser,
};
