/*

 
*/




const mongoose = require("mongoose");


const customerRoleSchema = mongoose.Schema({




    customerRoleUpdateOn: {
        type: Date,
        default: Date.now,
    },
    customerRoleCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("customerRole", customerRoleSchema);