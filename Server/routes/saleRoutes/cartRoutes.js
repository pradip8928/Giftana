const express = require("express");
const router = express.Router();
const {
    createCart,
    getAllCart,
    getCustomerWithCart

} = require("../../controller/salesController/CartController");


router.route("/cart").post(createCart);
router.route("/cart").get(getAllCart);
router.route("/getCustomerWithCart").get(getCustomerWithCart);


module.exports = router;