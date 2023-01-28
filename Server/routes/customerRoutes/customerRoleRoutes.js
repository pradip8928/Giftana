const express = require("express");
const router = express.Router();
const {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
} = require("../../controller/customerController/customerRoleController");


router.route("/customerRole").post(createProduct);
router.route("/customerRole/getAllCustomer").get(getAllProduct);

router.route("/customerRole/:id").get(getProductDetail);
router.route("/customerRole/:id").put(updateProduct);
router.route("/customerRole/:id").delete(deleteOneProduct);
router
    .route("/customerRole/customerRoles/deleteMultipleCustomerRoles")
    .delete(deleteMultipleProducts);

module.exports = router;