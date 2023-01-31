const express = require("express");
const router = express.Router();
const {
    createCustomer,
    getAllCustomer,
    getCustomerDetail,
    updateCustomer,
    deleteOneCustomer,
    deleteMultipleCustomers,
} = require("../../controller/customerController/customerController");


router.route("/customer").post(createCustomer);
router.route("/customer/getAllCustomer").get(getAllCustomer);

router.route("/customer/:id").get(getCustomerDetail);
router.route("/customer/:id").put(updateCustomer);
router.route("/customer/:id").delete(deleteOneCustomer);
router
    .route("/customer/customers/deleteMultipleCustomers")
    .delete(deleteMultipleCustomers);

module.exports = router;