const Schedule = require("../../models/systemModel/scheduleTaskModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// CREATE PRODUCT

const createSchedule = catchAsyncError(async(req, res, next) => {
    try {
        const schedule = await Schedule.create(req.body);

        res.status(201).json({
            success: true,
            schedule,
        });
    } catch (err) {
        next(err);
    }
});
//  GET ALL PRODUCT

const getAllSchedule = catchAsyncError(async(req, res, next) => {
    try {
        const scheduleCount = await Schedule.countDocuments();

        //   const apiFeature = new ApiFeatures(Product.find(), req.query)

        const data = await Schedule.find();

        // console.log("my all data is", data);

        const apiFeature = await new ApiFeatures(Schedule.find(), req.query)
            .searchByProductName()
            .filterByProductPrice();

        const shedules = await apiFeature.query;

        res.status(200).json({
            success: true,
            shedules,
            scheduleCount,
        });
    } catch (err) {
        next(err);
    }
});

// GET DETAIL OF A PRODUCT

const getScheduleDetail = catchAsyncError(async(req, res, next) => {
    try {
        const shedule = await Schedule.findById(req.params.id);

        if (!shedule) {
            return next(new ErrorHandler("Schedule not found", 404));
        }
        res.status(200).json({
            success: true,
            shedule,
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE A PRODUCT

const updateSchedule = catchAsyncError(async(req, res, next) => {

    try {
        let schedule = await Schedule.findById(req.params.id);

        if (!schedule) {
            return next(new ErrorHandler("shedule is  not found", 404));
        }

        schedules = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            schedules,
        });
    } catch (err) {
        next(err);
    }
});

// deleting the single item
const deleteOneSchedule = catchAsyncError(async(req, res, next) => {
    try {
        const schedules = await Schedule.findById(req.params.id);

        if (!schedules) {
            return next(new ErrorHandler("schedules is  not found", 404));
        }
        await schedules.remove();
        res.status(200).json({
            success: true,
            message: "schedules  deleted successfully",
        });
    } catch (err) {
        next(err);
    }
});
const deleteMultipleSchedules = catchAsyncError(async(req, res, next) => {
    try {
        const deleteSchedule = await req.body;
        if (!deleteSchedule) {
            return next(new ErrorHandler("Schedule not found", 404));
        }

        const objectIds = deleteSchedule.map((id) => mongoose.Types.ObjectId(id));

        await Schedule.deleteMany({ _id: { $in: objectIds } });

        res.status(200).json({
            success: true,
            message: "schedules has been  deleted successfully",
        });
    } catch (err) {
        console.log(`schedules  is not deleted due to error: ${err.message}`);
        next(err);
    }
});

module.exports = {
    createSchedule,
    getAllSchedule,
    getScheduleDetail,
    updateSchedule,
    deleteOneSchedule,
    deleteMultipleSchedules,
};