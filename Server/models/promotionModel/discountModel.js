/*

 discount
name->String
discountType->String enum:["Assign to order total ","Assign to products","Assigned to categories"]
discountAmount->Number
startDate->Date
endDate->Date
requiresCouponCode->Boolean
discountLimitation->String enum:["unlimited"]
requirements:[]
*/




const mongoose = require("mongoose");


const discountSchema = mongoose.Schema({




    discountsUpdateOn: {
        type: Date,
        default: Date.now,
    },
    discountsCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("discounts", discountSchema);