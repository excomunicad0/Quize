const ThemesServices = require('../services/ThemeServices');

const themeRouter = require('express').Router();

themeRouter.get('/', async (req, res) => {
  try {
    const themes = await ThemesServices.getAllThemes()
    res.status(200).json({ themes });
  } catch ({ message }) {
    res.status(500).json({ error: message })
  }



})





module.exports = themeRouter;