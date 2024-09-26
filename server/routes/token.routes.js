const router = require("express").Router();
const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const generateToken = require('../utils/authUtils')

router.get("/refresh", verifyRefreshToken, async (req, res) => {
  try {
    console.log(res.locals)
    const { user } = res.locals;
    const { accessToken, refreshToken } = generateToken({ user });

    res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: `${1000 * 60 * 60 * 12}`,
      })
      .json({ message: "success", user, accessToken });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;