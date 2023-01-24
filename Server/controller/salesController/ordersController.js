const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const createOrder = catchAsyncError(async (req, res, next) => {});

module.exports = {
  createOrder,
};
