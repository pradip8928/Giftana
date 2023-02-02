const express = require("express");
const router = express.Router();
const {
    createAffiliate,
    getAllAffiliate,
    getAffiliateDetail,
    updateAffiliate,
    deleteOneAffiliate,
    deleteMultipleAffiliates,
} = require("../../controller/promotionController/affiliatesController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/affiliates").post(authenticatedAdmin, createAffiliate);
router.route("/affiliates/getAllAffiliate").get(getAllAffiliate);
router.route("/affiliates/:id").get(authenticatedAdmin, getAffiliateDetail);
router.route("/affiliates/:id").put(authenticatedAdmin, updateAffiliate);
router
    .route("/affiliates/:id")
    .delete(authenticatedAdmin, deleteOneAffiliate);
router
    .route("/affiliates/deleteMultipleAffiliates")
    .delete(deleteMultipleAffiliates);

module.exports = router;