'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameUser extends Model {
    static associate({ Game, Question }) {
      this.belongsTo(Game, { foreignKey: 'gameId' });
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  GameUser.init(
    {
      isRightAnswer: DataTypes.BOOLEAN,
      gameId: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'GameUser',
    }
  );
  return GameUser;
};
