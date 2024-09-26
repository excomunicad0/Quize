'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  Answer.init(
    {
      title: DataTypes.TEXT,
      questionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Answer',
    }
  );
  return Answer;
};
