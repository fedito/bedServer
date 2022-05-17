const { response, request } = require("express");
const Bed = require("../models/bed");

const getBed = async (req = request, res = response, next) => {
  const { id } = req.params;

  const bed = await Bed.findByPk(id);

  if (!bed) {
    return next(new ErrorException(ErrorCode.NotFound));

  }

  res.json(bed);
};

const postBed = async (req = request, res = response) => {
  const { body } = req;

  const bed = await Bed.create(body);

  res.json(bed);
};

const putBed = async (req = request, res = response, next) => {
  const { id } = req.params;

  const { body } = req;

  const bed = await Bed.findByPk(id);

  if (!bed) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  bed.set(body);

  await bed.save();

  res.json(bed);
};

const deleteBed = async (req = request, res = response, next) => {
  const { id } = req.params;

  const bed = await Bed.findByPk(id);

  if (!bed) {
    return next(new ErrorException(ErrorCode.NotFound));
  }

  bed.destroy();

  res.json(bed);
};

module.exports = {
  getBed,
  postBed,
  putBed,
  deleteBed,
};
