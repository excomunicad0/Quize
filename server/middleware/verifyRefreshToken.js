require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyRefreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    res.locals.user = user;
    next();
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    console.log("Invalid refresh token");
    res.clearCookie("refreshToken").status(401);
  }
}

module.exports = verifyRefreshToken;