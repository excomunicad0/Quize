'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameUser extends Model {
    static associate({ Game, User, Question }) {
      this.belongsTo(Game, { foreignKey: 'gameId' });
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Question, { foreignKey: 'gameId' });
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
