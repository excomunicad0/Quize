'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, Question, GameUser }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsToMany(Question, { through: GameUser, foreignKey: 'gameId' });
    }
  }
  Game.init(
    {
      score: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
