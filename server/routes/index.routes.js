const apiRouter = require("express").Router();

const errorRouter = require("./error.routes");
const themeRouter = require("./theme.routes")
const questionsRouter=require ("./questions.routes");
const answersRouter = require("./answers.routes");

apiRouter.use("/themes", themeRouter);
apiRouter.use("/questions", questionsRouter);
apiRouter.use("/answers", answersRouter);

apiRouter.use("*", errorRouter);

