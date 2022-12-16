const mongoose = require("mongoose");

// productImage;
// productName;
// productPrice;
// productQuantity
// productAvalability

const catagorySchema = mongoose.Schema({
  productImage: {
    url: {
      type: String,
      required: true,
    },
  },
  productName: {
    type: String,
    required: [true, "Please Enter your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name should have more than 2 characters"],
    trim: true,
  },
  productPrice: {
    type: Number,
    required: [true, "Please Enter product price"],
    maxLength: [8, "price canot exceed 8 characters"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
    trim: true,
  },
  productQuantity: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxLength: [5, "stock cannot exceed 5 characters"],
    default: 1,
    trim: true,
  },
  productAvalability: {
    type: String,
    required: true,
    enum: ["In_Stock", "Not_In_Stock", "About_To_Finish"],
    default: "Not_In_Stock",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ratings: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Catagory", catagorySchema);
