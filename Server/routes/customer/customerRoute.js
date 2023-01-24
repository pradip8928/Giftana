const express = require("express");
const router = express.Router();
const {
  getAllCustomer,
} = require("../../controller/customerController/customerController");
const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/customer/allCustomer").get(getAllCustomer);

module.exports = router;
