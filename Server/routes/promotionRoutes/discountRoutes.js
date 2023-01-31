const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/promotionController/discountController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/discounts/createProduct").post(authenticatedAdmin, createProduct);
router.route("/discounts/getAllProduct").get(getAllProduct);
router.route("/discounts/product/:id").get(authenticatedAdmin, getProductDetail);
router.route("/discounts/product/:id").put(authenticatedAdmin, updateProduct);
router
    .route("/discounts/product/:id")
    .delete(authenticatedAdmin, deleteOneProduct);
router
    .route("/discounts/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;