const ErrorHandler = require("../../utils/errorHandler");
// const SuperAdmin = require("../../models/superAdminModel/createAdmin");
const Admin = require("../../models/authModel/adminModel");
// const admin = require("../../models/authModel/adminModel");

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        const roless = Admin.findOne({ roles: "superadmin" });
        // console.log("admin role", roless);
        // console.log("req.admin", req.admin.role);
        // console.log("in authorize roles");
        if (!roles.includes(req.admin.role)) {

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