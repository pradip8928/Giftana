/*

 
*/




const mongoose = require("mongoose");


const affliateSchema = mongoose.Schema({




    affliatesUpdateOn: {
        type: Date,
        default: Date.now,
    },
    affliatesCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("affliates", affliateSchema);