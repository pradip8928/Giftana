const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/catalogController/manageProductsController");


router.route("/manageProducts/createProduct").post(createProduct);
router.route("/manageProducts/getAllProduct").get(getAllProduct);

router.route("/manageProducts/product/:id").get(getProductDetail);
router.route("/manageProducts/product/:id").put(updateProduct);
router.route("/manageProducts/product/:id").delete(deleteOneProduct);
router
    .route("/manageProducts/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;