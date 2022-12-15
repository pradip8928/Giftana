const User = require("../../models/authModel/userModel");
const requireLogin = require("../../middleware/requiredLogin/requireLogin");
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const jwt = require("jsonwebtoken");

// / registeration of user
const registerUser = asyncHandler(async (req, res) => {
  const { userName, password, email, role } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error(`User with this ${email} already exists`);
  }

  const user = await User.create({ userName, email, password, role });
  if (user) {
    res.status(201).json({
      id: user._id,
      userName: user.userName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured`);
  }
});

// Login

// login or authenticated user
const authUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  if (user && (await user.matchPassword(password))) {
    // verify token

    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// Logout user
const logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "You had logout",
  });
});

module.exports = { registerUser, authUser, logoutUser };
