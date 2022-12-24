const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const adminSchema = mongoose.Schema(
  {
    adminName: {
      type: String,
      default: "admin",
      required: [true, "Please Enter your name"],
      maxLength: [30, "userName cannot exceed 30 characters"],
      minLength: [2, "userName should have more than 2 characters"],
    },
    password: {
      type: String,
      default: "admin123",
      required: [true, "Please Enter your password"],
      minLength: [4, "Password should be greater than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please Enter a valid Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid email"],
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

// will decrypt the password
adminSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10); //generating the salt more higher the value more stronger the password
  this.password = await bcrypt.hash(this.password, salt);
});

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
