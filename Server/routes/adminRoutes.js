const express = require('express')
const router = express.Router();
const requireLogin = require('../middleware/requireLogin')

const { registerAdmin, authAdmin, logoutAdmin } = require("../controller/adminController")


router.route('/register').post(registerAdmin)
router.route('/login').post(authAdmin)
router.route('/logout').post(logoutAdmin)


module.exports = router