// const apiRouter = require("express").Router();

const router = require("express").Router();
const authRouter = require("./auth.routes")
const errorRouter = require("./error.routes");
const tokensRouter = require("./token.routes")

router.use('/auth', authRouter)
router.use("/tokens", tokensRouter);
router.use("*", errorRouter);

module.exports = router
