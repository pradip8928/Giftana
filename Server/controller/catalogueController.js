const requireLogin = require("../middleware/requireLogin")
const asyncHandler = require("express-async-handler")
const generateToken = require("../utils/generateToken")
const jwt = require("jsonwebtoken")




const addCategory = asyncHandler(async(req, res, next) => {
    res.cookie("token", "christooff", {
        expires: new Date(Date.now() + 2000),
        httpOnly: false,
        // secure: process.env.NODE_ENV === "development",
    });
    console.log("hey catalogue")
    res.send("hlw ")
});

module.exports = { addCategory }