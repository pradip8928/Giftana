/*

 customerRole


name->String
systmeName->String enum:["administrator","demo-admin","procurement Manager", "Forum Moderators","Guests"]
isActive->Boolean
isTaxExempt->Boolean
freeShiping->Boolean
isSystemRole->Boolean
*/




const mongoose = require("mongoose");


const customerRoleSchema = mongoose.Schema({


    name: {
        type: String,
        required: [true, "Please Enter customer  name"],
        maxLength: [50, " name should not exceed 50 characters"],
        minLength: [2, " name should have more than 2 characters"],
        trim: true,
    },
    systemName: {
        type: String,
        required: [true, "Please  Select the system name"],
        enum: ["administrator", "demo-admin", "procurement Manager", "Forum Moderators", "Guests"],
        trim: true,
    },
    isTaxExempt: {
        type: Boolean,
        required: [true, "Please set the tax exempt"],
        default: false
    },
    isActive: {
        type: Boolean,
        required: [true, "Please set the activeness of customer"],
        default: false
    },
    freeShiping: {
        type: Boolean,
        required: [true, "Please set the free shiping of customer role"],
        default: false
    },
    systemRole: {
        type: Boolean,
        required: [true, "Please set the system role"],
        default: false
    },

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