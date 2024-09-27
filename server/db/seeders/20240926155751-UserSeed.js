'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'excomunicad',
        email: 'excomunicad@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
      {
        name: 'sokol',
        email: 'sokol@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
      {
        name: 'arturka',
        email: 'arturka@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
      {
        name: 'dimka',
        email: 'dimka@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};