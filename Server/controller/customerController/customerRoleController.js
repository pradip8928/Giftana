const CustomerRole = require("../../models/customerModel/customerRolesModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// CREATE Customer

const createCustomer = catchAsyncError(async(req, res, next) => {
    try {
        const customer = await CustomerRole.create(req.body);

        res.status(201).json({
            success: true,
            customer,
        });
    } catch (err) {
        next(err);
    }
});
//  GET ALL Customer

const getAllCustomer = catchAsyncError(async(req, res, next) => {
    try {
        const customerCount = await CustomerRole.countDocuments();

        //   const apiFeature = new ApiFeatures(Customer.find(), req.query)

        const data = await CustomerRole.find();

        // console.log("my all data is", data);

        const apiFeature = await new ApiFeatures(CustomerRole.find(), req.query)
            .searchByCustomerName()
            .filterByCustomerPrice();

        const customers = await apiFeature.query;

        res.status(200).json({
            success: true,
            customers,
            customerCount,
        });
    } catch (err) {
        next(err);
    }
});

// GET DETAIL OF A Customer

const getCustomerDetail = catchAsyncError(async(req, res, next) => {
    try {
        const customer = await CustomerRole.findById(req.params.id);

        if (!customer) {
            return next(new ErrorHandler("Customer not found", 404));
        }
        res.status(200).json({
            success: true,
            customer,
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE A Customer

const updateCustomer = catchAsyncError(async(req, res, next) => {
    console.log(
        "from frontend to update my self",
        req.body,
        "and id is",
        req.params.id
    );
    try {
        let customer = await CustomerRole.findById(req.params.id);

        if (!customer) {
            return next(new ErrorHandler("Customer not found", 404));
        }

        customer = await CustomerRole.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            customer,
        });
    } catch (err) {
        next(err);
    }
});

// deleting the single item
const deleteOneCustomer = catchAsyncError(async(req, res, next) => {
    try {
        const customer = await CustomerRole.findById(req.params.id);

        if (!customer) {
            return next(new ErrorHandler("Customer not found", 404));
        }
        await customer.remove();
        res.status(200).json({
            success: true,
            message: "customer deleted successfully",
        });
    } catch (err) {
        next(err);
    }
});
const deleteMultipleCustomers = catchAsyncError(async(req, res, next) => {
    try {
        const deleteCustomer = await req.body;
        if (!deleteCustomer) {
            return next(new ErrorHandler("Customer not found", 404));
        }

        const objectIds = deleteCustomer.map((id) => mongoose.Types.ObjectId(id));

        await CustomerRole.deleteMany({ _id: { $in: objectIds } });

        res.status(200).json({
            success: true,
            message: "Customers deleted successfully",
        });
    } catch (err) {
        console.log(`customer is not deleted due to error: ${err.message}`);
        next(err);
    }
});

module.exports = {
    createCustomer,
    getAllCustomer,
    getCustomerDetail,
    updateCustomer,
    deleteOneCustomer,
    deleteMultipleCustomers,
};