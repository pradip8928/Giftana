const express = require("express");
const {
  createProduct,
  getAllProduct,
  getProductDetail,
  updateProduct,
  deleteProduct,
} = require("../../controller/catalogController/catagoryController");

const router = express.Router();

router.route("/catagory/createProduct").post(createProduct);
router.route("/catagory/getAllProduct").get(getAllProduct);
router.route("/catagory/product/:id").get(getProductDetail);
router.route("/catagory/product/:id").put(updateProduct);
router.route("/catagory/product/:id").delete(deleteProduct);
router.route("/catagory/product/delete").delete(deleteProduct);

module.exports = router;
