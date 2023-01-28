const Rules = require("../../models/systemModel/rulesModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// CREATE PRODUCT

const createRule = catchAsyncError(async(req, res, next) => {
    try {
        const rule = await Rules.create(req.body);

        res.status(201).json({
            success: true,
            rule,
        });
    } catch (err) {
        next(err);
    }
});
//  GET ALL PRODUCT

const getAllRule = catchAsyncError(async(req, res, next) => {
    try {
        const ruleCount = await Rules.countDocuments();

        //   const apiFeature = new ApiFeatures(Product.find(), req.query)

        const data = await Rules.find();

        // console.log("my all data is", data);

        const apiFeature = await new ApiFeatures(Rules.find(), req.query)
            .searchByProductName()
            .filterByProductPrice();

        const rules = await apiFeature.query;

        res.status(200).json({
            success: true,
            rules,
            ruleCount,
        });
    } catch (err) {
        next(err);
    }
});

// GET DETAIL OF A PRODUCT

const getRuleDetail = catchAsyncError(async(req, res, next) => {
    try {
        const rules = await Rules.findById(req.params.id);

        if (!rules) {
            return next(new ErrorHandler("Product not found", 404));
        }
        res.status(200).json({
            success: true,
            rules,
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE A PRODUCT

const updateRule = catchAsyncError(async(req, res, next) => {
    console.log(
        "from frontend to update my self",
        req.body,
        "and id is",
        req.params.id
    );
    try {
        let rules = await Rules.findById(req.params.id);

        if (!rules) {
            return next(new ErrorHandler("rule is  not found", 404));
        }

        rule = await Rules.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            rule,
        });
    } catch (err) {
        next(err);
    }
});

// deleting the single item
const deleteOneRule = catchAsyncError(async(req, res, next) => {
    try {
        const rule = await Rules.findById(req.params.id);

        if (!rule) {
            return next(new ErrorHandler("rule is  not found", 404));
        }
        await rule.remove();
        res.status(200).json({
            success: true,
            message: "rule  deleted successfully",
        });
    } catch (err) {
        next(err);
    }
});
const deleteMultipleRules = catchAsyncError(async(req, res, next) => {
    try {
        const deleteRule = await req.body;
        if (!deleteRule) {
            return next(new ErrorHandler("Product not found", 404));
        }

        const objectIds = deleteRule.map((id) => mongoose.Types.ObjectId(id));

        await Rules.deleteMany({ _id: { $in: objectIds } });

        res.status(200).json({
            success: true,
            message: "rule has been  deleted successfully",
        });
    } catch (err) {
        console.log(`rule  is not deleted due to error: ${err.message}`);
        next(err);
    }
});

module.exports = {
    createRule,
    getAllRule,
    getRuleDetail,
    updateRule,
    deleteOneRule,
    deleteMultipleRules,
};