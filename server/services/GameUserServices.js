const { GameUser } = require('../db/models');


class GameUserServices {

static CreateGameUser = async ({
  gameId, questionId, isRigthAnswer
}) => {

  let game = await GameUser.create({
    gameId, questionId, isRigthAnswer
  });
  
  return game.get();
};


}
module.exports = GameUserServices;