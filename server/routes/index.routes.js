const apiRouter = require("express").Router();

const errorRouter = require("./error.routes");



apiRouter.use("*", errorRouter);

