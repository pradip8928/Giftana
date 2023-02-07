const express = require("express");
const router = express.Router();
// const {
//     createCart,
//     getAllCart,
//     getCustomerWithCart

// } = require("../../controller/salesController/CartController");
const {
    createCart,
    getAllCart,
    getCustomerWithCart

} = require("../../controller/salesController/cartController");


router.route("/cart").post(createCart);
router.route("/cart").get(getAllCart);
router.route("/getCustomerWithCart").get(getCustomerWithCart);


module.exports = router;