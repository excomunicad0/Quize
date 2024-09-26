'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer }) {
      this.hasMany(Answer, { foreignKey: 'questionId' });
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Question.init(
    {
      title: DataTypes.TEXT,
      image: DataTypes.TEXT,
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
