const express = require('express')
const router = express.Router();
const requireLogin = require('../middleware/requireLogin')
const { addCategory } = require('../controller/catalogueController')

router.route('/addCategory').post(addCategory)


module.exports = router