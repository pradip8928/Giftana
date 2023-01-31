const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/promotionController/compaignsController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/compaigns/createProduct").post(authenticatedAdmin, createProduct);
router.route("/compaigns/getAllProduct").get(getAllProduct);
router.route("/compaigns/product/:id").get(authenticatedAdmin, getProductDetail);
router.route("/compaigns/product/:id").put(authenticatedAdmin, updateProduct);
router
    .route("/compaigns/product/:id")
    .delete(authenticatedAdmin, deleteOneProduct);
router
    .route("/compaigns/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;