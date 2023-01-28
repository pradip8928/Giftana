const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/customerController/customerController");


router.route("/customer").post(createProduct);
router.route("/customer/getAllCustomer").get(getAllProduct);

router.route("/customer/:id").get(getProductDetail);
router.route("/customer/:id").put(updateProduct);
router.route("/customer/:id").delete(deleteOneProduct);
router
    .route("/customer/customers/deleteMultipleCustomers")
    .delete(deleteMultipleProducts);

module.exports = router;