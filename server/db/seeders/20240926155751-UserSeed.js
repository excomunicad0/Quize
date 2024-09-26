'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'jd@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
      {
        name: 'Mad Max',
        email: 'mm@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
      {
        name: 'Benya',
        email: 'benyane@mail.ru',
        password: await bcrypt.hash('123', 10)
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};