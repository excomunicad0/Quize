'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, Question }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Question, { foreignKey: 'gameId' })
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
