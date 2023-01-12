/*

reviewProductName->String
reviewProductCustomer->String
reviewProductIP->String
reviewProductTitle->String
reviewProductText->String
reviewProductRating->Number
reviewProductApproval->Boolean
reviewProductVerification->Boolean
reviewProductCreation->Date


*/




const mongoose = require("mongoose");


const reviewProductSchema = mongoose.Schema({
    reviewProductName: {
        type: String,
        required: [true, "Please Enter review product name"],
        maxLength: [50, "Product name should not exceed 50 characters"],
        minLength: [2, "Product name should have more than 2 characters"],
        trim: true,
    },
    reviewProductCustomer: {
        type: String,
        required: [true, "Please Enter product SKU value"],
        maxLength: [30, "Product SKU value should not exceed 30 characters"],
        minLength: [2, "Product SKU value  should have more than 2 characters"],
        trim: true,
    },
    reviewProductIP: {
        type: String,
        required: [true, "Please Enter Product IP"],
        maxLength: [30, "Review Product IP should not exceed 30 characters"],
        minLength: [2, "Review Product IP  should have more than 2 characters"],
        trim: true,
    },
    reviewProductTitle: {
        type: String,
        required: [true, "Please Enter Product Title"],
        maxLength: [30, "Review Product Title should not exceed 30 characters"],
        minLength: [2, "Review Product Title  should have more than 2 characters"],
        trim: true,
    },
    reviewProductText: {
        type: String,
        required: [true, "Please Enter Product Text"],
        maxLength: [30, "Review Product Text should not exceed 30 characters"],
        minLength: [2, "Review Product Text  should have more than 2 characters"],
        trim: true,
    },

    reviewProductRating: {
        type: Number,
        required: [true, "Please enter the review Product Rating"],
        maxLength: [15, "review Product Rating cannot exceed 15 characters"],
        trim: true,
    },



    reviewProductApproval: {
        type: Boolean,
        required: [true, "Please select the review Product Approval"],
        trim: true,
        default: false,
    },

    reviewProductVerification: {
        type: Boolean,
        required: [true, "Please select the review Product Verification"],
        trim: true,
        default: false,
    },


    reviewProductUpdateOn: {
        type: Date,
        default: Date.now,
    },
    reviewProductCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("reviewProduct", reviewProductSchema);