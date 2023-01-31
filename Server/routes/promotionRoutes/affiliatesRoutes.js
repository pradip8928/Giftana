const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/promotionController/affiliatesController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/affiliates/createProduct").post(authenticatedAdmin, createProduct);
router.route("/affiliates/getAllProduct").get(getAllProduct);
router.route("/affiliates/product/:id").get(authenticatedAdmin, getProductDetail);
router.route("/affiliates/product/:id").put(authenticatedAdmin, updateProduct);
router
    .route("/affiliates/product/:id")
    .delete(authenticatedAdmin, deleteOneProduct);
router
    .route("/affiliates/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;