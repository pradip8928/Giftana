/*
CustomerModel.js

General->
1.userName->String
2.email->String
3.password->String
4.gender->->String enum[Male,female]
5.firstName->String
6.lastName->String
7.dob->Date
8.companyName->String
9.adminComment->String
10.customerRoles->String enum[registrator]
11.isTaxExempt->Boolean
12.isActive->Boolean
 

// OCI
isActive->Boolean
Authenticated ->->Boolean
shoppingCartURL-> String
userName->String
Password->String
userID->String
logInAfterAuth->Boolean
transerTax->Boolean
shoppingCost->Number

// cXmlPunchout

isActive->Boolean
isAuthenticated->Boolean
userName->String
sharedSecret->String
*/

const mongoose = require("mongoose");


const customerSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please Enter customer user name"],
        maxLength: [50, "user name should not exceed 50 characters"],
        minLength: [2, "user name should have more than 2 characters"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please Enter customer email"],
        maxLength: [50, "email should not exceed 50 characters"],
        minLength: [2, "email should have more than 2 characters"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Please Enter customer password"],
        maxLength: [50, "password should not exceed 50 characters"],
        minLength: [2, "password should have more than 2 characters"],
        trim: true,
    },
    gender: {
        type: String,
        required: [true, "Please Select the customer gender"],
        enum: ["Male", "Female"],
        trim: true,
    },
    firstName: {
        type: String,
        required: [true, "Please Enter the customer first name"],
        maxLength: [50, "first name should not exceed 50 characters"],
        minLength: [2, "first name should have more than 2 characters"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Please Enter the customer last name"],
        maxLength: [50, "last name should not exceed 50 characters"],
        minLength: [2, "last name should have more than 2 characters"],
        trim: true,
    },
    dob: {
        type: Date,
        required: [true, "Please Enter the customer dob"],
        default: Date.now,
        trim: true,
    },
    companyName: {
        type: String,
        required: [true, "Please Enter the customer  company name"],
        maxLength: [50, "company name should not exceed 50 characters"],
        minLength: [2, "company name should have more than 2 characters"],
        trim: true,
    },
    adminComment: {
        type: String,
        required: [true, "Please Enter the admin Comment"],
        maxLength: [100, "admin Comment should not exceed 100 characters"],
        minLength: [2, "admin Comment should have more than 2 characters"],
        trim: true,
    },
    customerRoles: {
        type: String,
        required: [true, "Please Select the customer role"],
        enum: ["registrator1", "registrator2", "registrator3"],
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
    age: {
        type: Number,
        required: [true, "Please enter an age"],
        min: [18, "Age must be at least 18 years old"]
    },
    address: {
        type: String,
        required: [true, "Please enter an address"],
        maxLength: [100, "Address cannot exceed 100 characters"],
        trim: true
    },

    customersUpdateOn: {
        type: Date,
        default: Date.now,
    },
    customersCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Customers", customerSchema);