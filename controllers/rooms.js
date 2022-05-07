const { response, request } = require("express");
const Room = require("../models/room");


const getRoom = async (req = request, res = response) => {
  const { id } = req.params;

  const room = await Room.findByPk(id)

  if (!room) {
    throw new Error();
  }

  res.json(room);
};

const postRoom = async (req = request, res = response) => {
  const { body } = req;

  const room = await Room.create(body);

  res.json(room);
};

const putRoom = async (req = request, res = response) => {
  const { id } = req.params;

  const { body } = req;

  const room = await Room.findByPk(id);

  if (!room) {
    throw new Error();
  }

  room.set(body);

  await room.save();

  res.json(room);
};

const deleteRoom = async (req = request, res = response) => {
  const { id } = req.params;

  const room = await Room.findByPk(id);

  if (!room) {
    throw new Error();
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
