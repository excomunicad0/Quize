const GameUserServices = require('../services/gameUserServices');

const gameUserRouter = require('express').Router();

gameUserRouter.post('/', async (req, res) => {
  try {
    const { gameId, questionId, isRigthAnswer } = req.body;


    const newGame = await GameUserServices.createMus({
      gameId, questionId, isRigthAnswer
    });
    res.status(201).json({ message: 'success', newGame });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


module.exports = gameUserRouter;