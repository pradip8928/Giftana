const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError")
const ErrorHandler = require("../../utils/errorHandler");
const GiftCard = require("../../models/saleModel/giftCardModel")
const ApiFeatures = require("../../utils/apiFeatures");


// creation Of Product


const createProduct = catchAsyncError(async(req, res, next) => {
    try {

        const manageProduct = await GiftCard.create(req.body);

        res.status(201).json({
            success: true,
            manageProduct,
        });
    } catch (err) {
        next(err);
    }
});

// Ṛetriving Manage Products


const getAllProduct = catchAsyncError(async(req, res, next) => {
    try {
        const productCount = await GiftCard.countDocuments();

        //   const apiFeature = new ApiFeatures(Product.find(), req.query)

        const apiFeature = new ApiFeatures(GiftCard.find(), req.query)
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
        const product = await GiftCard.findById(req.params.id);

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
        let product = await GiftCard.findById(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
        }

        product = await GiftCard.findByIdAndUpdate(req.params.id, req.body, {
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
        const product = await GiftCard.findById(req.params.id);

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

        await GiftCard.deleteMany({ _id: { $in: objectIds } });

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