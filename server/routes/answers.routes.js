const answersRouter = require('express').Router();
const AnswersServices = require('../services/AnswersServices');

answersRouter.get('/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await AnswersServices.getAnswersByQuestionsId(questionId);
    if (answers) {
      res.status(200).json({ answers });
    }
    res.status(400).json({ message: 'answer not found' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = answersRouter;
