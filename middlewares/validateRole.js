const { response, request } = require("express");

const isAdmin = (req = request, res = response, next) => {
  if (!req.user) {
    throw new Error();
  }

  const { role } = req.user;

  if (role !== "ADMIN_ROLE") {
    throw new Error();
  }

  next();
};

const hasRole = (...roles) => {
  return (req = request, res = response, next) => {
    if (!req.user) {
      throw new Error();
    }

    if (!roles.includes(req.user.role)) {
      throw new Error();
    }
    next();
  };
};

module.exports = {
  isAdmin,
  hasRole,
};
