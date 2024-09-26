const UserServices = require("../services/Users.sevices");
const generateToken = require("../utils/authutils");
const bcrypt = require("bcrypt");

exports.registration = async (req, res) => {
    try {
      const { name, email, password } = req.body;  
      console.log(name, email, password);
      
          
      if (name.trim() === "" || email.trim() === "" || password.trim() === "" ) {
        return res.status(400).json({ message: "Заполните все поля" });
      }
      console.log(req.body);
      
      const userInBD = await UserServices.getUserByEmail(email);
  
      if (userInBD) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует." });
      }
      const user = await UserServices.createUser({
        name,
        email,
        password
      });
  
      if (user) {
        delete user.password;
        res.locals.user = user;
        
        const { accessToken, refreshToken } = generateToken({ user });
  
        res
          .status(201)
          .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 12,
          })
          .json({ message: "success", user, accessToken });
  
        return;
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

  exports.authorization = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email.trim() === "" || password.trim() === "") {
        return res.status(400).json({ message: "Заполните все поля" });
      }
  
      console.log(password);
  
      const user = await UserServices.getUserByEmail(email);
      console.log(user);
  
      if (user) {
        const compare = await bcrypt.compare(password, user.password);
  
        if (compare) {
          delete user.password;
          res.locals.user = user;
          console.log(res.locals.user);
          
          const { accessToken, refreshToken } = generateToken({ user });
  
          res
            .status(200)
            .cookie("refreshToken", refreshToken, {
              httpOnly: true,
              maxAge: `${1000 * 60 * 60 * 12}`,
            })
            .json({ message: "success", user, accessToken });
  
          return;
        }
      }
  
      res.status(400).json({ message: "email или пароль неверные" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

  exports.logout = (req, res) => {
    res.locals.user = undefined;
    res.clearCookie("refreshToken").json({ message: "success", accessToken: "" });
  };