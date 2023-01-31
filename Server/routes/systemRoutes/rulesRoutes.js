const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/systemController/rulesController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/rules/createProduct").post(authenticatedAdmin, createProduct);
router.route("/rules/getAllProduct").get(getAllProduct);
router.route("/rules/product/:id").get(authenticatedAdmin, getProductDetail);
router.route("/rules/product/:id").put(authenticatedAdmin, updateProduct);
router
    .route("/rules/product/:id")
    .delete(authenticatedAdmin, deleteOneProduct);
router
    .route("/rules/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;