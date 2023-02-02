const express = require("express");
const router = express.Router();
const {
    createRule,
    getAllRule,
    getRuleDetail,
    updateRule,
    deleteOneRule,
    deleteMultipleRules,
} = require("../../controller/systemController/rulesController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/rule").post(createRule);
router.route("/getAllRule").get(getAllRule);
router.route("/rule/:id").get(authenticatedAdmin, getRuleDetail);
router.route("/rule/:id").put(authenticatedAdmin, updateRule);
router
    .route("/rule/:id")
    .delete(authenticatedAdmin, deleteOneRule);
router
    .route("/rule/deleteMultipleRules")
    .delete(deleteMultipleRules);

module.exports = router;