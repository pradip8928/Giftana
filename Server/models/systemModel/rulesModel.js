/*

 
*/




const mongoose = require("mongoose");


const ruleSchema = mongoose.Schema({




    rulesUpdateOn: {
        type: Date,
        default: Date.now,
    },
    rulesCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("rules", ruleSchema);