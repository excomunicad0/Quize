const { Answer } = require('../db/models')


class AnswersServices {

  static getOneAns = async (questionId) => {
    const ans = await Answer.findByPk(questionId);
    return ans ? ans.get() : null;
  };

  static getAnswersByQuestionsId = async (questionId) => {
    const answers = await Answer.findAll({ where: { questionId } })
    return answers ? answers.map(answer => answer.get()) : null
  }

}

module.exports = AnswersServices