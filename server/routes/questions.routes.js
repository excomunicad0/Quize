const questionsRouter = require('express').Router();
const QuestionsServices = require('../services/QuestionsServices');

questionsRouter.get('/', async (req, res) => {
  try {
    const questions = await QuestionsServices.getAllQuestions()
    res.status(200).json({ questions });
  } catch ({ message }) {
    res.status(500).json({ error: message })
  }
})

module.exports = questionsRouter;