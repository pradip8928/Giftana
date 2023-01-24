/*

 
*/




const mongoose = require("mongoose");


const compaignSchema = mongoose.Schema({




    compaignsUpdateOn: {
        type: Date,
        default: Date.now,
    },
    compaignsCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("compaigns", compaignSchema);