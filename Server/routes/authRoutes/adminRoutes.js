const express = require("express");
const router = express.Router();
const requireLogin = require("../../middleware/requiredLogin/requireLogin");

const {
    authorizeRoles,
} = require("../../middleware/superAdminAuthenticaton/superAdminAuth");

const {
    registerAdmin,
    authAdmin,
    logoutAdmin,
} = require("../../controller/authController/adminController");

router.route("/register").post(authorizeRoles("superadmin"), registerAdmin);
// router.route("/register").post(registerAdmin);
router.route("/login").post(authorizeRoles("superadmin"), authAdmin);
router.route("/logout").post(authorizeRoles("superadmin"), logoutAdmin);

module.exports = router;