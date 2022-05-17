const { response, request } = require("express");
const ErrorCode = require("../error-handler/errorCode");
const ErrorException = require("../error-handler/errorException");
const Bed = require("../models/bed");
const Room = require("../models/room");


const getRoom = async (req = request, res = response, next) => {
  const { id } = req.params;

  const room = await Room.findByPk(id, {
    include: [
      {
        model: Bed,
      },
    ],
  })

  if (!room) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  res.json(room);
};

const postRoom = async (req = request, res = response) => {
  const { body } = req;

  const room = await Room.create(body);

  res.json(room);
};

const putRoom = async (req = request, res = response, next) => {
  const { id } = req.params;

  const { body } = req;

  const room = await Room.findByPk(id);

  if (!room) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  room.set(body);

  await room.save();

  res.json(room);
};

const deleteRoom = async (req = request, res = response, next) => {
  const { id } = req.params;

  const room = await Room.findByPk(id);

  if (!room) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  room.destroy();

  res.json(room);
};

module.exports = {
  getRoom,
  postRoom,
  putRoom,
  deleteRoom
};
