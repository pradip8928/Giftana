const Admin = require("../../models/authModel/adminModel");
const requireLogin = require("../../middleware/requiredLogin/requireLogin");
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const jwt = require("jsonwebtoken");
// const SuperAdmin = require("../../models/superAdminModel/createAdmin");
const ErrorHandler = require("../../utils/errorHandler");

// / registeration of Admin
const registerAdmin = asyncHandler(async (req, res) => {
  console.log("in registerAdmin");
  const { adminName, password, email, role } = req.body;
  console.log("my data is", adminName, password, email, role);

  if (!adminName || !email || !password) {
    throw new Error(`Please fill the data properly`);
  }
  const adminExist = await Admin.findOne({ adminName });
  if (adminExist) {
    res.status(400);
    console.log("admin exist");
    throw new Error(`Admin with this ${email} already exists`);
  }

  const admin = await Admin.create({ adminName, email, password, role });

  const token = admin.getJWTToken();

  if (admin) {
    console.log("admin created");
    res.status(201).json({
      id: admin._id,
      adminName: admin.adminName,
      email: admin.email,
      role: admin.role,
      token,
      // token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured`);
  }
});
// Login

// login or authenticated Admin
const authAdmin = asyncHandler(async (req, res) => {
  console.log("from frontend");

  const { adminName, password } = req.body;

  console.log("my data", adminName, password);

  if (!adminName || !password) {
    console.log("Invalid Email or Password");
    throw new Error("Invalid Email or Password");
  }

  const admin = await Admin.findOne({ adminName });

  if (!admin) {
    console.log("Invalid Credential");
    throw new Error("Invalid Credential");
  }

  const isPasswordMatched = await admin.matchPassword(password);

  if (!isPasswordMatched) {
    console.log("Invalid Email or Password");
    throw new Error("Invalid Email or Password");
  }

  const token = admin.getJWTToken();

  // creating token and saving in cookie

  console.log("created token is", token);

  const option = {
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie("token", token, option).json({
    success: true,
    admin,
    token,
  });
});

// Logout Admin
const logoutAdmin = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "You had logout",
  });
});

// unecessary
// const superAdmin = asyncHandler(async (req, res) => {
//   try {
//     const idSuperAdmin = await SuperAdmin.create(req.body);

//     res.status(201).json({
//       success: true,
//       idSuperAdmin,
//     });
//   } catch (err) {
//     // next(err);
//     console.log("err", err);
//   }
// });

module.exports = { registerAdmin, authAdmin, logoutAdmin };
