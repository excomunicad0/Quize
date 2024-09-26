'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Themes', [{
        id: 1,
        title: "Слон",
        image: "https://i.pinimg.com/564x/10/5c/3b/105c3bd55040ac5aa76b67e7b1f65be9.jpg"
    },
    {
        id: 2,
        title: "Тигр",
        image: "https://i.pinimg.com/736x/b5/32/c4/b532c400c00d2099a6462729ccf88e26.jpg"
    },
    {
        id: 3,
        title: "Панда",
        image: "https://i.pinimg.com/564x/9e/b2/f9/9eb2f96d1a80843b4901c22fa0767728.jpg"
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Themes', null, {});
     
  }
};
