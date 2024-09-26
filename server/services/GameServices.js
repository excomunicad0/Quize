const { Game } = require('../db/models');

class GameServices {
  static createGame = async () => {
    const game = await Game.create();
    return game;
  };

  static updateGame = async ({id, score}) => {
    const game = await Game.findByPk({id, score});
    return game.get();
  };
}

module.exports = GameServices;
