/*

 affilite
isActive->Boolean
firstName->String
lastName->String
email->String
companyName->String
country->String  
state->String
city->String
address1->String
address2->String
zipCode->Number
phoneNumber->Number
faxNumber->Number
*/




const mongoose = require("mongoose");


const affliateSchema = mongoose.Schema({

    isActive: {
        type: Boolean,
        required: true,
    },
    firstName: {
        type: String,
        required: [true, "please enter the first name"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "please enter the last name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "please enter the email address"],
        trim: true,
    },
    companyName: {
        type: String,
        required: [true, "please enter the company name"],
        trim: true,
    },
    country: {
        type: String,
        required: [true, "please select the country"],
        trim: true,
    },
    state: {
        type: String,
        required: [true, "please select the state"],

        trim: true,
    },
    city: {
        type: String,
        required: [true, "please select the city"],
        trim: true,
    },
    address1: {
        type: String,
        required: [true, "please enter the address"],
        trim: true,
    },
    address2: {
        type: String,
        required: [true, "please enter the address"],
        trim: true,
    },
    zipCode: {
        type: Number,
        required: [true, "please enter the zip code"],
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: [true, "please enter the phone number"],
        trim: true,
    },
    faxNumber: {
        type: Number,
        required: [true, "please enter the fax number"],
        trim: true,
    },


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