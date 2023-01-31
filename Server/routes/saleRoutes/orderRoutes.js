const express = require("express");
const router = express.Router();
const {
    // createProduct,
    // getAllProduct,
    // getProductDetail,
    // updateProduct,
    // deleteOneProduct,
    // deleteMultipleProducts,
    placeOrder,
    getAllOrders
} = require("../../controller/salesController/orderController");


router.route("/order").post(placeOrder);
router.route("/order").get(getAllOrders);

// router.route("/sale/product/:id").get(getProductDetail);
// router.route("/sale/product/:id").put(updateProduct);
// router.route("/sale/product/:id").delete(deleteOneProduct);
// router
//     .route("/sale/products/deleteMultipleProducts")
//     .delete(deleteMultipleProducts);

module.exports = router;