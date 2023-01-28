/*

 
*/




const mongoose = require("mongoose");


const shipmentSchema = mongoose.Schema({




    shipmentUpdateOn: {
        type: Date,
        default: Date.now,
    },
    shipmentCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("shipment", shipmentSchema);