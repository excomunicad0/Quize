'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Themes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
        unique: true,
      },
      image: {
        type: Sequelize.TEXT,
        defaultValue:
          'https://avatars.mds.yandex.net/i?id=36f47fa4b22fcde91af0b0f74a20d1bb8b50ddb9-4288990-images-thumbs&n=13',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Themes');
  },
};
