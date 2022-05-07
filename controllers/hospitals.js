const { response, request } = require("express");
const Hospital = require("../models/hospital");


const getHospital = async (req = request, res = response) => {
  const { id } = req.params;

  const hospital = await Hospital.findByPk(id)

  if (!hospital) {
    throw new Error();
  }

  res.json(hospital);
};

const postHospital = async (req = request, res = response) => {
  const { body } = req;

  const hospital = await Hospital.create(body);

  res.json(hospital);
};

const putHospital = async (req = request, res = response) => {
  const { id } = req.params;

  const { body } = req;

  const hospital = await Hospital.findByPk(id);

  if (!hospital) {
    throw new Error();
  }

  hospital.set(body);

  await hospital.save();

  res.json(hospital);
};

const deleteHospital = async (req = request, res = response) => {
  const { id } = req.params;

  const hospital = await Hospital.findByPk(id);

  if (!hospital) {
    throw new Error();
  }

  hospital.destroy();

  res.json(hospital);
};

module.exports = {
  getHospital,
  postHospital,
  putHospital,
  deleteHospital
};