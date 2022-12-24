const mongoose = require("mongoose");

// productName;
// productCompleteName;
// productAliasName;
// productPublished;
// productOrder;
// productStores;



// productName,productCompleteName,productAliasName,productPublished,productOrder,productStores
// name ,cname,alias, published i.e. Boolean ,order,stores

const catagorySchema = mongoose.Schema({

    productName: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 2 characters"],
        trim: true,
    },
    productCompleteName: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 2 characters"],
        trim: true,
    },
    productAliasName: {
        type: String,
        required: [true, "Please Enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 2 characters"],
        trim: true,
    },
    productPublished: {
        type: Boolean,
        required: [true, "Please Enter your name"],
        // maxLength: [30, "Name cannot exceed 30 characters"],
        // minLength: [2, "Name should have more than 2 characters"],
        trim: true,
    },
    productOrder: {
        type: Number,
        required: [true, "Please Enter product price"],
        maxLength: [8, "price canot exceed 8 characters"],
        trim: true,
    },
    productStores: {
        type: Number,
        required: [true, "Please Enter product price"],
        maxLength: [8, "price canot exceed 8 characters"],
        trim: true,
    },



    // productAvalability: {
    //     type: String,
    //     required: true,
    //     enum: ["In_Stock", "Not_In_Stock", "About_To_Finish"],
    //     default: "Not_In_Stock",
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("Catagory", catagorySchema);