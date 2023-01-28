/*

 
*/




const mongoose = require("mongoose");


const giftCardSchema = mongoose.Schema({




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