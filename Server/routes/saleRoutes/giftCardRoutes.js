const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/salesController/giftCardController");


router.route("/giftCard/product").post(createProduct);
router.route("/giftCard/getAllProduct").get(getAllProduct);

router.route("/giftCard/product/:id").get(getProductDetail);
router.route("/giftCard/product/:id").put(updateProduct);
router.route("/giftCard/product/:id").delete(deleteOneProduct);
router
    .route("/giftCard/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;