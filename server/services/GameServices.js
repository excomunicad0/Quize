const { Game } = require('../db/models');

class GameServices {
  static createGame = async ({userId}) => {
    const game = await Game.create({userId});
    return game;
  };

  static updateGame = async ({id, score}) => {
    const game = await Game.findOne({ where: { id } });
    if (game) {
      return game.update({
        score: game.score + score
      });
    }
    return null;
  };
}

module.exports = GameServices;
