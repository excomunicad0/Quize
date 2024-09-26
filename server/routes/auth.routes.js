const userController = require('../controllers/userController')
const router = require("express").Router();

router.route("/signup").post(userController.registration)

router.route("/signin").post(userController.authorization)

router.route("/logout").delete(userController.logout)

module.exports = router;