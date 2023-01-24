const express = require("express");
const router = express.Router();
const {
  createOrder,
} = require("../../controller/salesController/ordersController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/catagory/orders").post(authenticatedAdmin, createOrder);

// add
// router.route("/catagory/product/delete").delete(deleteProduct);

module.exports = router;
