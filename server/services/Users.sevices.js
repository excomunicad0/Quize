const { User } = require("../db/models");
const bcrypt = require("bcrypt");

class UserServices {
  static createUser = async ({ name, email, password } = {}) => {
    try {
      let user;
      user = await User.findOne({ where: { email } });
      if (!user) {
        user = await User.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
        });
        console.log(user);
        return user.get();
      }
      return "Пользователь с таким E-mail уже зарегистрирован.";
    } catch ({ message }) {
      console.log(message);
    }
  };

  static getAllUser = async () => {
    const users = await User.findAll();
    return users ? users.map((user) => user.get()) : null;
  };

  static getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user ? user.get() : null;
  };

  static getUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user ? user.get() : null;
  };
}

module.exports = UserServices;