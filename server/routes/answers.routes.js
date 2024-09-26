const AnswersServices = require('../services/AnswersServices');

const answersRouter = require('express').Router();



answersRouter.get('/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    const answer = await AnswersServices.getOneAns(questionId);
    if (answer) {
      res.status(200).json({ message: 'success', answer });
    }
    res.status(400).json({ message: 'answer not found' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


module.exports = answersRouter;