const { Question } = require('../db/models')


class QuestionsServices {

  static getAllQuestions = async () => (
    await Question.findAll()
  ).map((questions) => questions.get())


}

module.exports = QuestionsServices