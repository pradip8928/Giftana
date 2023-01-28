/*

 
*/




const mongoose = require("mongoose");


const orderSchema = mongoose.Schema({




    ordersUpdateOn: {
        type: Date,
        default: Date.now,
    },
    ordersCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("orders", orderSchema);