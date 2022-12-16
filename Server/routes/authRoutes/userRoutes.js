const express = require("express");
const router = express.Router();
const requireLogin = require("../../middleware/requiredLogin/requireLogin");

const {
  registerUser,
  authUser,
  logoutUser,
} = require("../../controller/authController/userController");

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/logout").post(logoutUser);

module.exports = router;
