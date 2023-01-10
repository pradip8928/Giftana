const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/catalogController/manufacturerProductController");


router.route("/manufacturerProducts/createProduct").post(createProduct);
router.route("/manufacturerProducts/getAllProduct").get(getAllProduct);

router.route("/manufacturerProducts/product/:id").get(getProductDetail);
router.route("/manufacturerProducts/product/:id").put(updateProduct);
router.route("/manufacturerProducts/product/:id").delete(deleteOneProduct);
router
    .route("/manufacturerProducts/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;