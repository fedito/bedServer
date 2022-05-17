const { response, request } = require("express");
const ErrorCode = require("../error-handler/errorCode");
const ErrorException = require("../error-handler/errorException");
const Floor = require("../models/floor");
const Room = require("../models/room");

const getFloor = async (req = request, res = response, next) => {
  const { id } = req.params;

  const floor = await Floor.findByPk(id, {
    include: [
      {
        model: Room,
      },
    ],
  });

  if (!floor) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  res.json(floor);
};

const postFloor = async (req = request, res = response) => {
  const { body } = req;

  const floor = await Floor.create(body);

  res.json(floor);
};

const putFloor = async (req = request, res = response, next) => {
  const { id } = req.params;

  const { body } = req;

  const floor = await Floor.findByPk(id);

  if (!floor) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  floor.set(body);

  await floor.save();

  res.json(floor);
};

const deleteFloor = async (req = request, res = response, next) => {
  const { id } = req.params;

  const floor = await Floor.findByPk(id);

  if (!floor) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  floor.destroy();

  res.json(floor);
};

module.exports = {
  getFloor,
  postFloor,
  putFloor,
  deleteFloor,
};
