const catchAsyncError = require("./errorHandler/catchAsyncError");
const admin = require("../models/authModel/adminModel");

const jwt = require("jsonwebtoken");

exports.authenticatedAdmin = catchAsyncError(async (req, res, next) => {
  console.log("In  authenticatedAdmin ");
  const { token } = req.cookies;

  if (!token) {
    throw new Error("Please login to access this resource");
  }

  const decodedData = jwt.verify(
    token,
    "JXHFKRFUYRIUFYGERUXYFGXUOYGFUOYGRFXUXOYEGGR"
  );

  req.admin = await admin.findById(decodedData.id);

  next();
});
