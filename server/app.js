
const { configureApp, PORT } = require('./config/serverConfig');
const indexRouter = require('./routes/index.routes');


const app = configureApp();

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});