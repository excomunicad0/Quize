'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, GameUser }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(GameUser, { foreignKey: 'gameId' });
    }
  }
  Game.init(
    {
      score: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};
