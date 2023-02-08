const express = require("express");
const router = express.Router();
const {

    createProduct,
    getAllProduct,
    getLowStockProducts,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
    createProductReview,
    getProductReviews,
    deleteReviews,

} = require("../../controller/catalogController/manageProductsController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/manageProducts/createProduct").post(createProduct);
router.route("/manageProducts/getAllProduct").get(getAllProduct);

router.route("/review").put(createProductReview);
router
    .route("/reviews")
    .get(getProductReviews)
    .delete(deleteReviews);

router.route("/manageProducts/getLowStockProducts").get(getLowStockProducts);


router.route("/manageProducts/product/:id").get(getProductDetail);
router.route("/manageProducts/product/:id").put(updateProduct);
router.route("/manageProducts/product/:id").delete(deleteOneProduct);
router
    .route("/manageProducts/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;