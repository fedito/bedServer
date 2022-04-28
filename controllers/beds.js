const { response, request } = require("express");

const bedsGet = (req = request, res = response) => {
  
    const bed = req.params.bed;

    const queryParams = req.query

  res.json("Hello World");
};
const bedsPost = (req = request, res = response) => {
  const body = req.body;

  res.json("Hello World");
};

module.exports = {
  bedsGet,
  bedsPost,
};
