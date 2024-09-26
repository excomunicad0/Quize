const GameUserServices = require('../services/gameUserServices');

const gameUserRouter = require('express').Router();

gameUserRouter.post('/', async (req, res) => {
  try {
    const { gameId, questionId, isRightAnswer } = req.body;
    const gameUser = await GameUserServices.createMus({
      gameId,
      questionId,
      isRightAnswer,
    });
    res.status(201).json({ gameUser });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// gameUserRouter.get(`/:gameId`, async (req, res) => {
//   try {
//     const { gameId } = req.params;
//     const gameUser = await GameUserServices.getGamesByUser(gameId);
//     gameUser.map((game) => game.questionId);
//     res.status(200).json({ gameUser });
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

module.exports = gameUserRouter;
