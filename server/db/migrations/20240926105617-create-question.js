'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT,
        defaultValue:
          'https://avatars.mds.yandex.net/i?id=0b9315290af2bf68938107ccd369ee7ad084fd7f9594cd2f-12593547-images-thumbs&n=13',
      },
      rightAnswer: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      themeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
