/*
productName->
productSKU ->
productPrice->Number
productStockQuantity->Number
productLimitationInStore->
productPublished
productUpdate->

productReviews
 ------String
1. title
2. review text
3. rating
-------Number
4. isApproved
5. isVerified
6. createdAt
7. 
*/

const mongoose = require("mongoose");

const manageProductSchema = mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please Enter your name"],
    maxLength: [50, "Product name should not exceed 50 characters"],
    minLength: [2, "Product name should have more than 2 characters"],
    trim: true,
  },
  productSKU: {
    type: String,
    required: [true, "Please Enter product SKU value"],
    maxLength: [30, "Product SKU value should not exceed 30 characters"],
    minLength: [2, "Product SKU value  should have more than 2 characters"],
    trim: true,
  },
  productImage: {
    type: String,
    required: [true, "Please Enter product Image Link"],
    trim: true,
  },
  productPrice: {
    type: Number,
    required: [true, "Please enter the  product price"],
    maxLength: [15, "Product price canot exceed 15 characters"],
    trim: true,
  },
  productStockQuantity: {
    type: Number,
    required: [true, "Please enter product stock quantity"],
    maxLength: [12, "product stock quantity should not  exceed 12 characters"],
    trim: true,
  },
  productLimitationInStore: {
    type: Number,
    required: [true, "Please enter product limitation in the Store"],
    maxLength: [
      12,
      "product limitation in the  should not  exceed 12 characters",
    ],
    trim: true,
  },
  productPublished: {
    type: Boolean,
    required: [true, "Please select the status of product published or not"],
    trim: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "Admin",
        required: true,
      },
      name: {
        type: String,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  productUpdateOn: {
    type: Date,
    default: Date.now,
  },
  productCreatedAt: {
    type: Date,
    default: Date.now,
  },
});

// module.exports = mongoose.model("ManageProducts", manageProductSchema);
const ManageProductModel = mongoose.model(
  "ManageProducts",
  manageProductSchema
);
module.exports = ManageProductModel;
