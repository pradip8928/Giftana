const catchAsyncError = require("./errorHandler/catchAsyncError");
const admin = require("../models/authModel/adminModel");
const jwt = require("jsonwebtoken");
const cookie = require('cookie');

exports.authenticatedAdmin = catchAsyncError(async(req, res, next) => {
    console.log("In  authenticatedAdmin ");
    // const cookies = cookie.parse(req.headers.cookie);
    // console.log(cookies);
    // console.log(`cookies ${res.headers.cookie.token}`);
    // const { token } = req.cookies;


    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;
    // const token = req.cookies.token;
    console.log(`token is  ${token}`);
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    // if (!token) {
    //     throw new Error("Please login to access this resource");
    // }

    const decodedData = jwt.verify(
        token,
        process.env.JWT_SECRET
        // "Giftana"
    );

    // const rootUser = await admin.find({ _id: decodedData._id, token: token });
    const rootUser = await admin.find({ _id: decodedData._id, "token:token": token });

    if (!rootUser) {
        throw new Error("admin not found");
    }

    req.admin = await admin.findById(decodedData.id);
    req.token = token
    req.rootUser = rootUser;

    next();
});