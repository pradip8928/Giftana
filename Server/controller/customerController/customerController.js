const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const customerUser = require("../../models/authModel/userModel");
const ApiFeatures = require("../../utils/apiFeatures");

const getAllCustomer = catchAsyncError(async (req, res, next) => {
  const userCustomer = await customerUser.find();

  const totalCustomer = userCustomer.length;

  const apiFeature = await new ApiFeatures(
    customerUser.find(),
    req.query
  ).searchByUserName();

  const customer = await apiFeature.query;

  res.status(200).json({
    success: true,
    totalCustomer,
    customer,

    // customerCount,
  });
});

module.exports = {
  getAllCustomer,
};
