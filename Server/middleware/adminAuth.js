const catchAsyncError = require("./errorHandler/catchAsyncError");
const admin = require("../models/authModel/adminModel");
const jwt = require("jsonwebtoken");

exports.authenticatedAdmin = catchAsyncError(async (req, res, next) => {
  console.log("In  authenticatedAdmin ");
  const { token } = req.cookies;

  console.log("verified token is ", token);

  if (!token) {
    throw new Error("Please login to access this resource");
  }

  const decodedData = jwt.verify(
    token,
    "JXHFKRFUYRIUFYGERUXYFGXUOYGFUOYGRFXUXOYEGGR"
  );

  const rootUser = await admin.find({ _id: decodedData._id, token: token });

  if (!rootUser) {
    throw new Error("user not found");
  }

  req.admin = await admin.findById(decodedData.id);

  req.rootUser = rootUser;

  next();
});
