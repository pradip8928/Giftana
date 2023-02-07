const express = require("express");
const router = express.Router();
const requireLogin = require("../../middleware/requiredLogin/requireLogin");

const {
    authorizeRoles,
} = require("../../middleware/superAdminAuthenticaton/superAdminAuth");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

const {
    registerAdmin,
    authAdmin,
    logoutAdmin,
    // userInfo
} = require("../../controller/authController/adminController");



// router.use("*", userInfo)
// router
//     .route("/register")
//     .post(registerAdmin);
router
    .route("/register")
    .post(authenticatedAdmin, authorizeRoles("superadmin"), registerAdmin);
// router.route("/register").post(registerAdmin);
//   .post(registerAdmin);
// router.route("/register").post(registerAdmin);
router.route("/login").post(authAdmin);
router.route("/logout").post(logoutAdmin);
// router.route("/userInfo").get(userInfo);

module.exports = router;