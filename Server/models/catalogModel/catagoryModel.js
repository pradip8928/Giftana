const mongoose = require("mongoose");
const Schema = mongoose.Schema
    // productName;
    // productCompleteName;
    // productAliasName;
    // productPublished;
    // productOrder;
    // productStores;

// productName,productCompleteName,productAliasName,productPublished,productOrder,productStores
// name ,cname,alias, published i.e. Boolean ,order,stores

// const catagorySchema = mongoose.Schema({
//     productParentCategory: {
//         type: String,
//         required: [true, "Please Enter the product parent category"],
//         minLength: [2, "Name should have more than 2 characters"],
//         maxLength: [30, "Name cannot exceed 30 characters"],
//         trim: true,
//     },
//     productExternalLink: {
//         type: String,
//         required: [true, "Please Enter the product Link"],
//         minLength: [2, "Name should have more than 2 characters"],
//         trim: true,
//     },
//     productDesc: {
//         type: String,
//         required: [true, "Please Enter the product desc"],
//         minLength: [2, "product desc should have more than 2 characters"],
//         trim: true,
//     },
//     productBadgeText: {
//         type: String,
//         required: [true, "Please Enter the product badge text"],
//         minLength: [2, "Product badge text should have more than 2 characters"],
//         trim: true,
//     },
//     productBadgeStyle: {
//         type: String,
//         // required: [true, "Please Select  the product badge style"],
//         trim: true,
//         default: "Secondary",
//     },

//     productName: {
//         type: String,
//         required: [true, "Please Enter your name"],
//         maxLength: [30, "Product Name cannot exceed 30 characters"],
//         minLength: [2, "Product name should have more than 2 characters"],
//         trim: true,
//     },
//     productCompleteName: {
//         type: String,
//         required: [true, "Please Enter your name"],
//         maxLength: [30, "Name cannot exceed 30 characters"],
//         minLength: [2, "Name should have more than 2 characters"],
//         trim: true,
//     },
//     productAliasName: {
//         type: String,
//         required: [true, "Please Enter your name"],
//         maxLength: [30, "Name cannot exceed 30 characters"],
//         minLength: [2, "Name should have more than 2 characters"],
//         trim: true,
//     },
//     productPublished: {
//         type: Boolean,
//         required: [true, "Please Enter your name"],
//         trim: true,
//         default: false,
//     },
//     showOnHomePage: {
//         type: Boolean,
//         required: [true, "Please select the show on home page"],
//         trim: true,
//     },
//     productOrder: {
//         type: Number,
//         required: [true, "Please Enter product price"],
//         maxLength: [8, "price canot exceed 8 characters"],
//         trim: true,
//     },
//     productStores: {
//         type: Number,
//         // required: [true, "Please Enter product price"],
//         maxLength: [8, "price canot exceed 8 characters"],
//         trim: true,
//         default: 2,
//     },
//     pageSizeOptions: {
//         type: String,
//         required: [true, "Please select the page size "],
//         enum: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
//         trim: true,
//     },
//     productImage: {
//         type: String,
//         required: [true, "Please Enter product Image Link"],
//         trim: true,
//     },
//     Stock: {
//         type: Number,
//         required: [true, "Please Enter Product Stock"],
//         maxLength: [40, "stock cannot exceed 4 characters"],
//         default: 1,
//     },
//     products: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "ManageProducts",
//     }, ],
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });
const catagorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: [true, "Please Enter the category description"],
        minLength: [2, "category desc should have more than 2 characters"],
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Please select the image of the category"],
        trim: true,
    },
    subcategories: [{
        type: Schema.Types.ObjectId,
        ref: "Subcategory"
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Catagory", catagorySchema);