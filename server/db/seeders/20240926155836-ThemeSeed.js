'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Themes', [{
      id: 1,
      title: "Директор стаи",
      image: "/img/юра.jpeg"
    },
    {
      id: 2,
      title: "Вожак стаи",
      image: "/img/макс.jpeg"
    },
    {
      id: 3,
      title: "Lutaya стая",
      image: "/img/61.jpeg"
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Themes', null, {});

  }
};
