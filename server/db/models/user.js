'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Game, GameUser }) {
      this.belongsToMany(Game, { through: GameUser, foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
