const express = require("express");
const router = express.Router();
const {
    createSchedule,
    getAllSchedule,
    getScheduleDetail,
    updateSchedule,
    deleteOneSchedule,
    deleteMultipleSchedules,
} = require("../../controller/systemController/scheduleTaskController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/schedule").post(createSchedule);
router.route("/getAllSchedule").get(getAllSchedule);
router.route("/schedule/:id").get(authenticatedAdmin, getScheduleDetail);
router.route("/schedule/:id").put(authenticatedAdmin, updateSchedule);
router
    .route("/schedule/:id")
    .delete(authenticatedAdmin, deleteOneSchedule);
router
    .route("/schedule/deleteMultipleSchedules")
    .delete(deleteMultipleSchedules);

module.exports = router;