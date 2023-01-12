const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError")
const ErrorHandler = require("../../utils/errorHandler");
const ReviewProduct = require("../../models/catalogModel/ReviewProductModels")
const ApiFeatures = require("../../utils/apiFeatures");











// creation Of Product


const createProduct = catchAsyncError(async(req, res, next) => {
    try {

        const reviewProduct = await ReviewProduct.create(req.body);

        res.status(201).json({
            success: true,
            reviewProduct,
        });
    } catch (err) {
        next(err);
    }
});

// Ṛetriving Manage Products


const getAllProduct = catchAsyncError(async(req, res, next) => {
    try {
        const productCount = await ReviewProduct.countDocuments();

        //   const apiFeature = new ApiFeatures(Product.find(), req.query)

        const apiFeature = new ApiFeatures(ReviewProduct.find(), req.query)
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
        const product = await ReviewProduct.findById(req.params.id);

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



// update Manage Products


const updateProduct = catchAsyncError(async(req, res, next) => {

    try {
        let product = await ReviewProduct.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        product = await ReviewProduct.findByIdAndUpdate(req.params.id, req.body, {
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


// Delete single products


// deleting the single item
const deleteOneProduct = catchAsyncError(async(req, res, next) => {
    try {
        const product = await ReviewProduct.findById(req.params.id);

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


// Deleting Multiple Products
const deleteMultipleProducts = catchAsyncError(async(req, res, next) => {
    try {
        const deleteProduct = await req.body;
        if (!deleteProduct) {
            return next(new ErrorHandler("Product not found", 404));
        }

        const objectIds = deleteProduct.map((id) => mongoose.Types.ObjectId(id));

        await ReviewProduct.deleteMany({ _id: { $in: objectIds } });

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