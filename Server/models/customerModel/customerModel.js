const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  customerEmail: {
    type: String,
    required: [true, "Please Enter a valid Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid email"],
  },

  userName: {
    type: String,
    required: [true, "Please Enter your name"],
    maxLength: [30, "userName cannot exceed 30 characters"],
    minLength: [2, "userName should have more than 2 characters"],
  },
  Name: {
    type: String,
    required: [true, "Please Enter your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [2, "Name should have more than 2 characters"],
  },

  customerRole: {
    type: String,
    default: "user",
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  lastActivity: {
    type: Date,
    default: Date.now(),
  },

  // productAvalability: {
  //     type: String,
  //     required: true,
  //     enum: ["In_Stock", "Not_In_Stock", "About_To_Finish"],
  //     default: "Not_In_Stock",
  // },
});

module.exports = mongoose.model("Customer", customerSchema);
