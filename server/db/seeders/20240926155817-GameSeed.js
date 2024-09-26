'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Games', [{
      id: 1,
      score: 750,
      userId: 2
    },
    {
      id: 2,
      score: 920,
      userId: 1
    },
    {
      id: 3,
      score: 650,
      userId: 3
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Games', null, {});

  }
};
