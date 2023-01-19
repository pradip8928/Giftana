const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  getProductDetail,
  updateProduct,
  deleteOneProduct,
  deleteMultipleProducts,
} = require("../../controller/catalogController/catagoryController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/catagory/createProduct").post(authenticatedAdmin, createProduct);
router.route("/catagory/getAllProduct").get(getAllProduct);
router.route("/catagory/product/:id").get(authenticatedAdmin, getProductDetail);
router.route("/catagory/product/:id").put(authenticatedAdmin, updateProduct);
router
  .route("/catagory/product/:id")
  .delete(authenticatedAdmin, deleteOneProduct);
// add
// router.route("/catagory/product/delete").delete(deleteProduct);
router
  .route("/catagory/products/deleteMultipleProducts")
  .delete(deleteMultipleProducts);

module.exports = router;
