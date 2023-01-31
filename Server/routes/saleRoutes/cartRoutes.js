const express = require("express");
const router = express.Router();
const {
    createCart,
    getAllCart

} = require("../../controller/salesController/CartController");


router.route("/cart").post(createCart);
router.route("/cart").get(getAllCart);


module.exports = router;