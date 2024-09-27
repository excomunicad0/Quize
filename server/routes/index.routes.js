// const apiRouter = require("express").Router();

const router = require("express").Router();
const authRouter = require("./auth.routes")
const errorRouter = require("./error.routes");
const themeRouter = require("./theme.routes")
const questionsRouter=require ("./questions.routes");
const answersRouter = require("./answers.routes");
const tokensRouter = require("./token.routes")
const gameUserRouter = require("./gameUser.routes")
const gameRouter = require("./game.routes")

router.use('/games', gameRouter);
router.use("/themes", themeRouter);
router.use("/questions", questionsRouter);
router.use("/answers", answersRouter);
router.use('/auth', authRouter)
router.use("/tokens", tokensRouter);
router.use('/gameusers', gameUserRouter)

router.use("*", errorRouter);

module.exports = router
