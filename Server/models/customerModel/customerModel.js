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
 
*/

const mongoose = require("mongoose");


const customerSchema = mongoose.Schema({
    customersUpdateOn: {
        type: Date,
        default: Date.now,
    },
    customersCreatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("customers", customerSchema);