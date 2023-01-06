const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/catalogController/reviewProductController");


router.route("/reviewProduct/createProduct").post(createProduct);
router.route("/reviewProduct/getAllProduct").get(getAllProduct);

router.route("/reviewProduct/product/:id").get(getProductDetail);
router.route("/reviewProduct/product/:id").put(updateProduct);
router.route("/reviewProduct/product/:id").delete(deleteOneProduct);
router
    .route("/reviewProduct/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;