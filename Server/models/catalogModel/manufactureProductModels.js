const mongoose = require("mongoose");

// productDisplayOrder->Number;
// productPublished->Boolean;
// productName->String;
// productDesc->String;
// toSelectPageSize->Boolean;
// productPic->String;
//  manufacturerTemplate->String enum: ["product in Grid Lines"]
// discountOnProducts->String enum :["5%","10%","20%","30%","40%"]
// limitedToStores->String   enum: ["Demo Shop 1", "Demo Shop 2", "Demo Shop 3 "]
//  limitedToCustomerRoles->String   enum: ["Administrator", "Demo Admins", "Super Administrator ","Registrator"]





// productName,productCompleteName,productAliasName,productPublished,productOrder,productStores
// name ,cname,alias, published i.e. Boolean ,order,stores

const manufacturerSchema = mongoose.Schema({

    productOrder: {
        type: Number,
        required: [true, "Please enter the order of product"],
        maxLength: [8, "order cannot exceed 8 characters"],
        trim: true,
    },
    productPublished: {
        type: Boolean,
        required: [true, "Please select publish of product"],
        trim: true,
    },
    productName: {
        type: String,
        required: [true, "Please Enter product name"],
        maxLength: [30, "Product name cannot exceed 30 characters"],
        minLength: [2, "Product name should have more than 2 characters"],
        trim: true,
    },
    productDesc: {
        type: String,
        required: [true, "Please enter the product description"],
        maxLength: [30, "Product description cannot exceed 30 characters"],
        minLength: [2, "Product description should have more than 2 characters"],
        trim: true,
    },
    toSelectPageSize: {
        type: Boolean,
        required: [true, "Please select the page size "],
        trim: true,
    },

    manufacturerTemplate: {
        type: String,
        required: [true, "Please select the manufacture template "],
        enum: ["product in Grid Lines"],
        default: "product in Grid Lines",
    },
    discountOnProducts: {
        type: String,
        required: [true, "Please select the discounts on products "],
        enum: ["5%", "10%", "20%", "30%", "40%"],
        default: "0%",
    },
    limitedToStores: {
        type: String,
        required: [true, "Please select the limitation of store"],
        enum: ["Demo Shop 1", "Demo Shop 2", "Demo Shop 3 "],
        default: "Demo Shop 1%",
    },
    limitedToCustomerRoles: {
        type: String,
        required: [true, "Please select the limitation  of customer roles"],
        enum: ["Administrator", "Demo Admins", "Super Administrator ", "Registrator"],
        default: "Administrator",
    },
    createdProductAt: {
        type: Date,
        default: Date.now,
    },
    updatedProductAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Manufacturer", manufacturerSchema);