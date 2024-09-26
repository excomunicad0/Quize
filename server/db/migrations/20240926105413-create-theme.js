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
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('Themes');
  },
};
