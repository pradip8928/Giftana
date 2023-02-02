/*

 name->String
 desc->String
 isActive->Boolean
 scope->String enum=["Cart","Customer","Product"]
*/




const mongoose = require("mongoose");


const ruleSchema = mongoose.Schema({


    ruleName: {
        type: String,
        required: [true, "Please Enter the rule name"],
        minLength: [2, "Rule name should have more than 2 characters"],
        maxLength: [30, "Rule name cannot exceed 30 characters"],
        trim: true,
    },
    ruleDesc: {
        type: String,
        required: [true, "Please Enter the rule description"],
        minLength: [2, "Rule description should have more than 2 characters"],
        maxLength: [30, "Rule description cannot exceed 30 characters"],
        trim: true,
    },
    isActive: {
        type: Boolean,
        required: [true, "Please set the active state of rule"],
        trim: true,
        default: false
    },
    scope: {
        type: String,
        required: [true, "Please select the scope of the rule "],
        enum: ["Cart", "Customer", "Product"],
        trim: true,
    },

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