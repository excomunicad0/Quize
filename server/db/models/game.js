'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, Question, GameUser }) {
      this.belongsToMany(User, { through: GameUser, foreignKey: 'gameId' });
      this.hasMany(Question, { foreignKey: 'gameId' });
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
