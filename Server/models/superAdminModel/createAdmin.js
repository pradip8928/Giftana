const mongoose = require("mongoose");
const validator = require("validator");

const superAdminSchema = new mongoose.Schema({
  SP_Name: {
    type: String,
    default: "admin",
    required: [true, "Please Enter your name"],
    maxLength: [30, "userName cannot exceed 30 characters"],
    minLength: [2, "userName should have more than 2 characters"],
  },
  SP_Email: {
    type: String,
    required: [true, "Please Enter a valid Email"],
    validate: [validator.isEmail, "Please Enter a valid email"],
  },
  SP_Password: {
    type: String,
    default: "admin123",
    required: [true, "Please Enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
  },

  role: {
    type: String,
    default: "superadmin",
  },
});

module.exports = mongoose.model("SuperAdmin", superAdminSchema);
