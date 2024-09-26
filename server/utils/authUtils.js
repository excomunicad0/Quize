const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(payload) {
  return {
    accessToken: jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: `${1000 * 60 * 5}`,
    }),
    refreshToken: jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: `${1000 * 60 * 60 * 12}`,
    }),
  };
}

module.exports = generateToken;