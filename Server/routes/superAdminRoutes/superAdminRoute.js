const express = require("express");

const {
  authorizeRoles,
} = require("../../middleware/superAdminAuthenticaton/superAdminAuth");

const {
  superAdmin,
} = require("../../controller/authController/adminController");

const router = express.Router();

router.route("/createadminsuperadmin").post(superAdmin);

module.exports = router;
