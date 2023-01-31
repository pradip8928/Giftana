const Affiliate = require("../../models/promotionModel/affiliatesModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// CREATE Affiliate

const createAffiliate = catchAsyncError(async(req, res, next) => {
    try {
        console.log("from postman");
        const affiliates = await Affiliate.create(req.body);

        res.status(201).json({
            success: true,
            affiliates,
        });
    } catch (err) {
        next(err);
    }
});
//  GET ALL Affiliate

const getAllAffiliate = catchAsyncError(async(req, res, next) => {
    try {
        const affiliateCount = await Affiliate.countDocuments();

        //   const apiFeature = new ApiFeatures(Affiliate.find(), req.query)

        const data = await Affiliate.find();

        // console.log("my all data is", data);

        const apiFeature = await new ApiFeatures(Affiliate.find(), req.query)
            .searchByAffiliateName()
            .filterByAffiliatePrice();

        const affiliates = await apiFeature.query;

        res.status(200).json({
            success: true,
            affiliates,
            affiliateCount,
        });
    } catch (err) {
        next(err);
    }
});

// GET DETAIL OF A Affiliate

const getAffiliateDetail = catchAsyncError(async(req, res, next) => {
    try {
        const affiliates = await Affiliate.findById(req.params.id);

        if (!affiliates) {
            return next(new ErrorHandler("Affiliate not found", 404));
        }
        res.status(200).json({
            success: true,
            affiliates,
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE A Affiliate

const updateAffiliate = catchAsyncError(async(req, res, next) => {

    try {
        let affiliate = await Affiliate.findById(req.params.id);

        if (!affiliate) {
            return next(new ErrorHandler("Affiliate not found", 404));
        }

        affiliates = await Affiliate.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            affiliates,
        });
    } catch (err) {
        next(err);
    }
});

// deleting the single item
const deleteOneAffiliate = catchAsyncError(async(req, res, next) => {
    try {
        const affiliates = await Affiliate.findById(req.params.id);

        if (!affiliates) {
            return next(new ErrorHandler("Affiliate not found", 404));
        }
        await affiliates.remove();
        res.status(200).json({
            success: true,
            message: "affiliates deleted successfully",
        });
    } catch (err) {
        next(err);
    }
});
const deleteMultipleAffiliates = catchAsyncError(async(req, res, next) => {
    try {
        const deleteAffiliate = await req.body;
        if (!deleteAffiliate) {
            return next(new ErrorHandler("Affiliate not found", 404));
        }

        const objectIds = deleteAffiliate.map((id) => mongoose.Types.ObjectId(id));

        await Affiliate.deleteMany({ _id: { $in: objectIds } });

        res.status(200).json({
            success: true,
            message: "affiliates deleted successfully",
        });
    } catch (err) {
        console.log(`affiliates is not deleted due to error: ${err.message}`);
        next(err);
    }
});

module.exports = {
    createAffiliate,
    getAllAffiliate,
    getAffiliateDetail,
    updateAffiliate,
    deleteOneAffiliate,
    deleteMultipleAffiliates,
};