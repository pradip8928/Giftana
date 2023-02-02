const express = require("express");
const router = express.Router();
const {
  // createProduct,
  // getAllProduct,
  // getProductDetail,
  // updateProduct,
  // deleteOneProduct,
  // deleteMultipleProducts,
  placeOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
} = require("../../controller/salesController/orderController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/order").post(authenticatedAdmin, placeOrder);
router.route("/createorder").post(authenticatedAdmin, createOrder);
router.route("/allorders").get(authenticatedAdmin, getAllOrders);
router
  .route("/order/:id")
  .put(authenticatedAdmin, updateOrder)
  .delete(authenticatedAdmin, deleteOrder);

module.exports = router;
