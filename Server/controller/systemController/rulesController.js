const Rules = require("../../models/systemModel/rulesModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// CREATE PRODUCT

const createProduct = catchAsyncError(async(req, res, next) => {
    try {
        console.log("from postman");
        const product = await Rules.create(req.body);

        res.status(201).json({
            success: true,
            product,
        });
    } catch (err) {
        next(err);
    }
});
//  GET ALL PRODUCT

const getAllProduct = catchAsyncError(async(req, res, next) => {
    try {
        const productCount = await Rules.countDocuments();

        //   const apiFeature = new ApiFeatures(Product.find(), req.query)

        const data = await Rules.find();

        // console.log("my all data is", data);

        const apiFeature = await new ApiFeatures(Rules.find(), req.query)
            .searchByProductName()
            .filterByProductPrice();

        const products = await apiFeature.query;

        res.status(200).json({
            success: true,
            products,
            productCount,
        });
    } catch (err) {
        next(err);
    }
});

// GET DETAIL OF A PRODUCT

const getProductDetail = catchAsyncError(async(req, res, next) => {
    try {
        const product = await Rules.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }
        res.status(200).json({
            success: true,
            product,
        });
    } catch (err) {
        next(err);
    }
});

// UPDATE A PRODUCT

const updateProduct = catchAsyncError(async(req, res, next) => {
    console.log(
        "from frontend to update my self",
        req.body,
        "and id is",
        req.params.id
    );
    try {
        let product = await Rules.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        product = await Rules.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            product,
        });
    } catch (err) {
        next(err);
    }
});

// deleting the single item
const deleteOneProduct = catchAsyncError(async(req, res, next) => {
    try {
        const product = await Rules.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }
        await product.remove();
        res.status(200).json({
            success: true,
            message: "product deleted successfully",
        });
    } catch (err) {
        next(err);
    }
});
const deleteMultipleProducts = catchAsyncError(async(req, res, next) => {
    try {
        const deleteProduct = await req.body;
        if (!deleteProduct) {
            return next(new ErrorHandler("Product not found", 404));
        }

        const objectIds = deleteProduct.map((id) => mongoose.Types.ObjectId(id));

        await Rules.deleteMany({ _id: { $in: objectIds } });

        res.status(200).json({
            success: true,
            message: "products deleted successfully",
        });
    } catch (err) {
        console.log(`product is not deleted due to error: ${err.message}`);
        next(err);
    }
});

module.exports = {
    createProduct,
    getAllProduct,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
};