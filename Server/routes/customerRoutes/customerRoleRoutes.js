const express = require("express");
const router = express.Router();
const {
    createCustomer,
    getAllCustomer,
    getCustomerDetail,
    updateCustomer,
    deleteOneCustomer,
    deleteMultipleCustomers,
} = require("../../controller/customerController/customerRoleController");


router.route("/customerRole").post(createCustomer);
router.route("/customerRole/getAllCustomer").get(getAllCustomer);

router.route("/customerRole/:id").get(getCustomerDetail);
router.route("/customerRole/:id").put(updateCustomer);
router.route("/customerRole/:id").delete(deleteOneCustomer);
router
    .route("/customerRole/customerRoles/deleteMultipleCustomerRoles")
    .delete(deleteMultipleCustomers);

module.exports = router;