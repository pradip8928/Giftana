const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/salesController/shipmentController");


router.route("/shipment/product").post(createProduct);
router.route("/shipment/getAllProduct").get(getAllProduct);

router.route("/shipment/product/:id").get(getProductDetail);
router.route("/shipment/product/:id").put(updateProduct);
router.route("/shipment/product/:id").delete(deleteOneProduct);
router
    .route("/shipment/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;