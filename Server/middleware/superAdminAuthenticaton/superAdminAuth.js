const ErrorHandler = require("../../utils/errorHandler");
// const SuperAdmin = require("../../models/superAdminModel/createAdmin");
// const Admin = require("../../models/authModel/adminModel")
const admin = require("../../models/authModel/adminModel");

exports.authorizeRoles = (...roles) => {
  console.log("In  authorize roles ");
  return (req, res, next) => {
    // const roles =Admin.findOne({roles:"superadmin"})
    console.log("req.admin", req.admin.role);
    console.log("my role is", ...roles);
    console.log("in authorize roles");
    if (!roles.includes(req.admin.role)) {
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
