const ErrorHandler = require("../../utils/errorHandler");
const SuperAdmin = require("../../models/superAdminModel/createAdmin");

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log("in authorize roles");
    if (!roles.includes("superadm")) {
      console.log("hiii");
      return next(
        new ErrorHandler(
          `Another Role is not allowed to use this resource`,
          403
        )
      );
    }
    next();
  };
};
