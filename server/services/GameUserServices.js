const { GameUser } = require('../db/models');


class GameUserServices {

static CreateGameUser = async ({
  gameId, questionId, isRightAnswer
}) => {

  const game = await GameUser.create({
    gameId, questionId, isRightAnswer
  });
  
  return game.get();
};

  // static getGamesByUser = async (userId, gameId) => {
  //   const games = await GameUser.findAll({ where: { userId, gameId } });
  //   return games.map((game) => game.get());
  // };
}
module.exports = GameUserServices;