'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Answers', [{ id: 1, title: "Тигр", questionId: 1 },
    { id: 2, title: "Слон", questionId: 1 },
    { id: 3, title: "Гепард", questionId: 1 },
    { id: 4, title: "Лев", questionId: 1 }, // rightAnswer

    { id: 5, title: "Кит", questionId: 2 },
    { id: 6, title: "Кубик", questionId: 2 },
    { id: 7, title: "Дельфин", questionId: 2 },
    { id: 8, title: "Синяя", questionId: 2 }, // rightAnswer

    { id: 9, title: "Тигр", questionId: 3 },
    { id: 10, title: "Лев", questionId: 3 },
    { id: 11, title: "Зебра", questionId: 3 }, // rightAnswer
    { id: 12, title: "Тигр", questionId: 3 },

    { id: 13, title: "Воробей", questionId: 4 },
    { id: 14, title: "Соловей", questionId: 4 },
    { id: 15, title: "Попугай", questionId: 4 }, // rightAnswer
    { id: 16, title: "Синица", questionId: 4 },

    { id: 17, title: "Черепаха", questionId: 5 },
    { id: 18, title: "Ленивая", questionId: 5 }, // rightAnswer
    { id: 19, title: "Слон", questionId: 5 },
    { id: 20, title: "Кенгуру", questionId: 5 },

    { id: 21, title: "Попугай", questionId: 6 },
    { id: 22, title: "Собака", questionId: 6 },
    { id: 23, title: "Кенгуру", questionId: 6 }, // rightAnswer
    { id: 24, title: "Страус", questionId: 6 },

    { id: 25, title: "Собака", questionId: 7 },
    { id: 26, title: "Кошка", questionId: 7 }, // rightAnswer
    { id: 27, title: "Птица", questionId: 7 },
    { id: 28, title: "Медведь", questionId: 7 },

    { id: 29, title: "Лошадь", questionId: 8 },
    { id: 30, title: "Кот", questionId: 8 },
    { id: 31, title: "Мелочь", questionId: 8 },
    { id: 32, title: "Собака", questionId: 8 },

    { id: 33, title: "Крыса", questionId: 9 },
    { id: 34, title: "Бобёр", questionId: 9 },
    { id: 35, title: "Крыса", questionId: 9 }, // rightAnswer
    { id: 36, title: "Лимон", questionId: 9 },

    { id: 37, title: "Леопард", questionId: 10 },
    { id: 38, title: "Черепаха", questionId: 10 },
    { id: 39, title: "Конь", questionId: 10 },
    { id: 40, title: "Слон", questionId: 10 }, // rightAnswer

    { id: 41, title: "Крокодил", questionId: 11 },
    { id: 42, title: "Зебра", questionId: 11 }, // rightAnswer
    { id: 43, title: "Лев", questionId: 11 },
    { id: 44, title: "Медведь", questionId: 11 },

    { id: 45, title: "Кот", questionId: 12 },
    { id: 46, title: "Лев", questionId: 12 },
    { id: 47, title: "Слон", questionId: 12 },
    { id: 48, title: "Тигр", questionId: 12 }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Answers', null, {});

  }
};
