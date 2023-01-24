/*

 
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