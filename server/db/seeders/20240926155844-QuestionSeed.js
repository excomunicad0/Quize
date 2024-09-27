'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Questions', [{
      id: 1,
      title: "Этот парень был из тех кто просто любит ....?",
      image: "/img/1.jpeg",
      score: 100,
      rightAnswer: "Elbrus",
      themeId: 1
    },
    {
      id: 2,
      title: "Фраза Юры, тонко намекающая, что ты слишком много отдыхаешь в рабочее время?",
      image: "/img/2.jpeg",
      score: 200,
      rightAnswer: "Я волнуюсь за ваши проекты",
      themeId: 1
    },
    {
      id: 3,
      title: "Кто Юра из диснеевских принцесс?",
      image: "/img/img711.jpg",
      score: 300,
      rightAnswer: "Золушка",
      themeId: 1
    },
    {
      id: 4,
      title: "Какой факт не верный о Юре?",
      image: "/img/21.jpeg",
      score: 400,
      rightAnswer: "Катается на скейте",
      themeId: 1
    },
    {
      id: 5,
      title: "Как правильно произнести @?",
      image: "/img/6.jpeg",
      score: 100,
      rightAnswer: "Собаня",
      themeId: 2
    },
    {
      id: 6,
      title: "В чем Максу нет равных?",
      image: "/img/20.jpeg",
      score: 200,
      rightAnswer: "Написания TODOшек",
      themeId: 2
    },
    {
      id: 7,
      title: "Кого Макс больше всего любит из группы Волки?",
      image: "/img/11.jpeg",
      score: 300,
      rightAnswer: "Аню- она душка",
      themeId: 2
    },
    {
      id: 8,
      title: "Почему Макс переехал в Петербург?",
      image: "/img/60.jpeg",
      score: 400,
      rightAnswer: "Что бы выпустить самую крутую,веселую,умную и просто ах..какую невероятную группу Волков",
      themeId: 2
    },
    {
      id: 9,
      title: "Упорство важнее .....?",
      image: "/img/4.jpeg",
      score: 100,
      rightAnswer: "Таланта",
      themeId: 3
    },
    {
      id: 10,
      title: "О ком фраза: одно полушарие кодит, другое играет в овервотч?",
      image: "/img/15.jpeg",
      score: 200,
      rightAnswer: "Амантур",
      themeId: 3
    },
    {
      id: 11,
      title: "Кому мало абстрактных примеров?",
      image: "/img/10.jpeg",
      score: 300,
      rightAnswer: "Артурик",
      themeId: 3
    },
    {
      id: 12,
      title: "Найди НЕ чемпиона в теннис",
      image: "/img/3.jpeg",
      score: 400,
      rightAnswer: "Ростик",
      themeId: 3
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Questions', null, {});

  }
};
