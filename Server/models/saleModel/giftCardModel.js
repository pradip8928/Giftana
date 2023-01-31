/*
giftCardType->String enum:["Virtual","Physical"]
initialValue->Number
isActivated->Boolean
couponCode->String
recipientName->String
recipientEmail->String
senderName->String
senderEmail->String
message->String
 
*/




const mongoose = require("mongoose");


const giftCardSchema = mongoose.Schema({


    giftCardType: {
        type: String,
        required: true,
        enum: ["Virtual", "Physical"],
        trim: true,
    },
    intialValue: {
        type: Number,
        required: [true, "please enter the initial value"],
        trim: true,
    },
    isActivated: {
        type: Boolean,
        required: [true, "please set the activated state of the card"],
        trim: true,
    },
    couponCode: {
        type: String,
        required: [true, "please enter the coupon code"],
        trim: true,
    },
    recipientName: {
        type: String,
        required: [true, "please enter the recipient name"],
        trim: true,
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 2 characters"],
    },
    recipientEmail: {
        type: String,
        required: [true, "please enter the recipient Email"],
        trim: true,
        maxLength: [30, "Email cannot exceed 30 characters"],
        minLength: [2, "Email should have more than 2 characters"],
    },
    senderName: {
        type: String,
        required: [true, "please enter the sender name"],
        trim: true,
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [2, "Name should have more than 2 characters"],
    },
    senderEmail: {
        type: String,
        required: [true, "please enter the sender Email"],
        trim: true,
        maxLength: [30, "Email cannot exceed 30 characters"],
        minLength: [2, "Email should have more than 2 characters"],
    },
    message: {
        type: String,
        required: [true, "please enter the sender message"],
        trim: true,
        maxLength: [150, "message cannot exceed 150 characters"],
        minLength: [2, "message should have more than 2 characters"],
    },

    giftCardsUpdateOn: {
        type: Date,
        default: Date.now,
    },
    giftCardsCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("giftCards", giftCardSchema);