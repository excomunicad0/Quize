'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Answers', [{ id: 1, title: "Жизнь", questionId: 1 },
    { id: 2, title: "Чинить столы", questionId: 1 },
    { id: 3, title: "Elbrus", questionId: 1 },
    { id: 4, title: "Кататься на велосипеде по 50км за раз по холмистой местности и кайфовать", questionId: 1 },

    { id: 5, title: "Я волнуюсь за ваши проекты", questionId: 2 },
    { id: 6, title: "Быстро иди кодь!", questionId: 2 },
    { id: 7, title: "Пошли играть в теннис партейку", questionId: 2 },
    { id: 8, title: "Наша задача, что бы вы нашли работу", questionId: 2 }, // rightAnswer

    { id: 9, title: "Белоснежка", questionId: 3 },
    { id: 10, title: "Ариэль", questionId: 3 },
    { id: 11, title: "Жасмин", questionId: 3 }, // rightAnswer
    { id: 12, title: "Золушка", questionId: 3 },

    { id: 13, title: "Играл в рок группе", questionId: 4 },
    { id: 14, title: "Пишет стихи", questionId: 4 },
    { id: 15, title: "Ходит на кладбище", questionId: 4 }, // rightAnswer
    { id: 16, title: "Катается на скейте", questionId: 4 },

    { id: 17, title: "Собака", questionId: 5 },
    { id: 18, title: "Собаня", questionId: 5 }, // rightAnswer
    { id: 19, title: "ААААА", questionId: 5 },
    { id: 20, title: "Попа суслика", questionId: 5 },

    { id: 21, title: "Катание на лыжах", questionId: 6 },
    { id: 22, title: "Написание кода", questionId: 6 },
    { id: 23, title: "Пению", questionId: 6 }, // rightAnswer
    { id: 24, title: "Написания TODOшек", questionId: 6 },

    { id: 25, title: "Всех", questionId: 7 },
    { id: 26, title: "Аню- она душка", questionId: 7 }, // rightAnswer
    { id: 27, title: "Амантур - он веселый", questionId: 7 },
    { id: 28, title: "Полину - она машина", questionId: 7 },

    { id: 29, title: "Влюбился", questionId: 8 },
    { id: 30, title: "Что бы выпустить самую крутую,веселую,умную и просто ах..какую невероятную группу Волков", questionId: 8 },
    { id: 31, title: "Предложили многа деняг", questionId: 8 },
    { id: 32, title: "Собака", questionId: 8 },

    { id: 33, title: "Таланта", questionId: 9 },
    { id: 34, title: "Кода", questionId: 9 },
    { id: 35, title: "Тусовки", questionId: 9 }, // rightAnswer
    { id: 36, title: "Тенниса", questionId: 9 },

    { id: 37, title: "Артур", questionId: 10 },
    { id: 38, title: "Амантур", questionId: 10 },
    { id: 39, title: "Арсен", questionId: 10 },
    { id: 40, title: "Аня", questionId: 10 }, // rightAnswer

    { id: 41, title: "Артурик", questionId: 11 },
    { id: 42, title: "Арсенчик", questionId: 11 }, // rightAnswer
    { id: 43, title: "Димасик", questionId: 11 },
    { id: 44, title: "Вовчик", questionId: 11 },

    { id: 45, title: "Артур", questionId: 12 },
    { id: 46, title: "Полина", questionId: 12 },
    { id: 47, title: "Ростик", questionId: 12 },
    { id: 48, title: "Егор", questionId: 12 }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Answers', null, {});

  }
};
