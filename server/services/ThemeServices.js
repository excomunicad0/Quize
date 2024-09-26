const { Theme } = require('../db/models')


class ThemesServices {

  static getAllThemes = async () => (
    await Theme.findAll()
  ).map((themes) => themes.get())



}

module.exports = ThemesServices