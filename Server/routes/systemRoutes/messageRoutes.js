const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/systemController/messageController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/message/createProduct").post(authenticatedAdmin, createProduct);
router.route("/message/getAllProduct").get(getAllProduct);
router.route("/message/product/:id").get(authenticatedAdmin, getProductDetail);
router.route("/message/product/:id").put(authenticatedAdmin, updateProduct);
router
    .route("/message/product/:id")
    .delete(authenticatedAdmin, deleteOneProduct);
router
    .route("/message/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;