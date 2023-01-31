const express = require("express");
const router = express.Router();
const {
  createOrder,
  getSingleOrder,
  myOrders,
  getAlOrders,
  updateOrder,
  deleteOrder,
} = require("../../controller/salesController/ordersController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/createorder").post(authenticatedAdmin, createOrder);
router.route("/getsingleorder/:id").get(authenticatedAdmin, getSingleOrder);
router.route("/myorders").get(authenticatedAdmin, myOrders);

router.route("/allorders").get(authenticatedAdmin, getAlOrders);

router
  .route("/order/:id")
  .put(authenticatedAdmin, updateOrder)
  .delete(authenticatedAdmin, deleteOrder);

// add
// router.route("/catagory/product/delete").delete(deleteProduct);

module.exports = router;
