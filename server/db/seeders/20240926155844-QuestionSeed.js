'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Questions', [{
      id: 1,
      title: "Какое животное известно как король джунглей?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 400,
      rightAnswer: "Лев",
      themeId: 1
    },
    {
      id: 2,
      title: "Какое самое большое млекопитающее на Земле?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 300,
      rightAnswer: "Синяя",
      themeId: 1
    },
    {
      id: 3,
      title: "Какое животное обладает черно-белыми полосами?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 200,
      rightAnswer: "Зебра",
      themeId: 1
    },
    {
      id: 4,
      title: "Какой птице присуще умение имитировать звуки?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 300,
      rightAnswer: "Попугай",
      themeId: 1
    },
    {
      id: 5,
      title: "Какое животное известно своим медленным способом передвижения?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 200,
      rightAnswer: "Ленивая",
      themeId: 2
    },
    {
      id: 6,
      title: "Какое животное является символом Австралии?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 400,
      rightAnswer: "Кенгуру",
      themeId: 2
    },
    {
      id: 7,
      title: "Какое домашнее животное часто мяукает?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 100,
      rightAnswer: "Кошка",
      themeId: 2
    },
    {
      id: 8,
      title: "Какое животное приносит удачу и имеет четыре лапы?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 200,
      rightAnswer: "Лошадь",
      themeId: 2
    },
    {
      id: 9,
      title: "Какое животное обладает длинным хоботом?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 400,
      rightAnswer: "Слон",
      themeId: 3
    },
    {
      id: 10,
      title: "Какое животное спит на деревьях и питается листьями?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 300,
      rightAnswer: "Лень",
      themeId: 3
    },
    {
      id: 11,
      title: "Какое животное считается величайшим пловцом среди млекопитающих?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 300,
      rightAnswer: "Дельфин",
      themeId: 3
    },
    {
      id: 12,
      title: "Какое домашнее животное обычно гавкает?",
      image: "https://i.pinimg.com/564x/cb/ec/c5/cbecc59f03256670d581cf783df134b9.jpg",
      score: 100,
      rightAnswer: "Собака",
      themeId: 3
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Questions', null, {});

  }
};
