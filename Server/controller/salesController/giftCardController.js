const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError")
const ErrorHandler = require("../../utils/errorHandler");
const GiftCard = require("../../models/saleModel/giftCardModel")
const ApiFeatures = require("../../utils/apiFeatures");


// creation Of GiftCard


const createGiftCard = catchAsyncError(async(req, res, next) => {
    try {

        const giftCard = await GiftCard.create(req.body);

        res.status(201).json({
            success: true,
            giftCard,
        });
    } catch (err) {
        next(err);
    }
});

// Ṛetriving Manage GiftCards


const getAllGiftCard = catchAsyncError(async(req, res, next) => {
    try {
        const giftCardCount = await GiftCard.countDocuments();

        //   const apiFeature = new ApiFeatures(GiftCard.find(), req.query)

        const apiFeature = new ApiFeatures(GiftCard.find(), req.query)
            .searchByGiftCardName()
            .filterByGiftCardPrice();

        const giftCard = await apiFeature.query;

        res.status(200).json({
            success: true,
            giftCard,
            giftCardCount,
        });
    } catch (err) {
        next(err);
    }
});



// GET DETAIL OF A GiftCard

const getGiftCardDetail = catchAsyncError(async(req, res, next) => {
    try {
        const giftCard = await GiftCard.findById(req.params.id);

        if (!giftCard) {
            return next(new ErrorHandler("GiftCard not found", 404));
        }
        res.status(200).json({
            success: true,
            giftCard,
        });
    } catch (err) {
        next(err);
    }
});



// update Manage GiftCards


const updateGiftCard = catchAsyncError(async(req, res, next) => {

    try {
        let giftCard = await GiftCard.findById(req.params.id);

        if (!giftCard) {
            return next(new ErrorHandler("GiftCard not found", 404));
        }

        giftCard = await GiftCard.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            giftCard,
        });
    } catch (err) {
        next(err);
    }
});


// Delete single GiftCards


// deleting the single item
const deleteOneGiftCard = catchAsyncError(async(req, res, next) => {
    try {
        const giftCard = await GiftCard.findById(req.params.id);

        if (!giftCard) {
            return next(new ErrorHandler("GiftCard not found", 404));
        }
        await giftCard.remove();
        res.status(200).json({
            success: true,
            message: "giftCard deleted successfully",
        });
    } catch (err) {
        next(err);
    }
});


// Deleting Multiple GiftCards
const deleteMultipleGiftCards = catchAsyncError(async(req, res, next) => {
    try {
        const deleteGiftCard = await req.body;
        if (!deleteGiftCard) {
            return next(new ErrorHandler("GiftCard not found", 404));
        }

        const objectIds = deleteGiftCard.map((id) => mongoose.Types.ObjectId(id));

        await GiftCard.deleteMany({ _id: { $in: objectIds } });

        res.status(200).json({
            success: true,
            message: "GiftCards deleted successfully",
        });
    } catch (err) {
        console.log(`giftCard is not deleted due to error: ${err.message}`);
        next(err);
    }
});







module.exports = {
    createGiftCard,
    getAllGiftCard,
    getGiftCardDetail,
    updateGiftCard,
    deleteOneGiftCard,
    deleteMultipleGiftCards,
};