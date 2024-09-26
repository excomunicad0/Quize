const { Answer } = require('../db/models')


class AnswersServices {

  static getOneAns = async (questionId) => {
    const ans = await Answer.findByPk(questionId);
    return ans ? ans.get() : null;
  };

}

module.exports = AnswersServices