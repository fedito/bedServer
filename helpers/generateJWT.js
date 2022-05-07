const jwt = require("jsonwebtoken");

const generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRETKEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          throw new Error();
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};
