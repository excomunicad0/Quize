'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer, GameUser, Game }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
      this.hasMany(Answer, { foreignKey: 'questionId' });
      this.belongsToMany(Game, { through: GameUser, foreignKey: 'questionId' });
    }
  }
  Question.init(
    {
      title: DataTypes.TEXT,
      image: DataTypes.TEXT,
      score: DataTypes.INTEGER,
      rightAnswer: DataTypes.TEXT,
      themeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
