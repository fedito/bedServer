const { response, request } = require("express");
const ErrorCode = require("../error-handler/errorCode");
const ErrorException = require("../error-handler/errorException");
const Floor = require("../models/floor");
const Hospital = require("../models/hospital");

const getHospitals = async (req = request, res = response) => {
  const hospitals = await Hospital.findAll();
  res.json(hospitals);
};

const getHospital = async (req = request, res = response) => {
  const { id } = req.params;

  const hospital = await Hospital.findByPk(id, {
    include: [
      {
        model: Floor,
      },
    ],
  });

  console.log(hospital);

  if (!hospital) {
    return next(new ErrorException(ErrorCode.NotFound)) 
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
    return next(new ErrorException(ErrorCode.NotFound)) 
  }

  hospital.set(body);

  await hospital.save();

  res.json(hospital);
};

const deleteHospital = async (req = request, res = response) => {
  const { id } = req.params;

  const hospital = await Hospital.findByPk(id);

  if (!hospital) {
    return next(new ErrorException(ErrorCode.NotFound)) 
  }

  hospital.destroy();

  res.json(hospital);
};

module.exports = {
  getHospitals,
  getHospital,
  postHospital,
  putHospital,
  deleteHospital,
};
