const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/catalogController/catagoryController");

router.route("/catagory/createProduct").post(createProduct);
router.route("/catagory/getAllProduct").get(getAllProduct);
router.route("/catagory/product/:id").get(getProductDetail);
router.route("/catagory/product/:id").put(updateProduct);
router.route("/catagory/product/:id").delete(deleteOneProduct);
// add
// router.route("/catagory/product/delete").delete(deleteProduct);
router
    .route("/catagory/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);


module.exports = router;