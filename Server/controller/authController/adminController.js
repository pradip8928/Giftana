const Admin = require("../../models/authModel/adminModel");
const requireLogin = require("../../middleware/requiredLogin/requireLogin");
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const jwt = require("jsonwebtoken");
// const SuperAdmin = require("../../models/superAdminModel/createAdmin");
const ErrorHandler = require("../../utils/errorHandler");
const axios = require('axios');
// / registeration of Admin
const registerAdmin = asyncHandler(async(req, res) => {
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
        throw new Error(`Admin with this ${adminName} username already exists`);
    }

    const admin = await Admin.create({ adminName, email, password, role });

    const token = admin.getJWTToken();

    if (admin) {
        console.log("admin has created successfully");
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
const authAdmin = asyncHandler(async(req, res) => {
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
        sameSite: "none",
    };
    res.cookie("token", token, option).json({
        success: true,
        admin,
        token,
    });

    // res.cookie("token", token, {
    //     httpOnly: true,
    //     sameSite: 'none',
    //     secure: true,

    //     // path: '/',
    //     option
    // }).json({
    //     success: true,
    //     admin,
    //     token,
    // });
    // res.setHeader(
    //     'Set-Cookie', cookie.serialize('token', token, {
    //         httpOnly: true,
    //         sameSite: 'none',
    //         secure: false,

    //         path: '/',
    //         option
    //     }).json({
    //         success: true,
    //         admin,
    //         token,
    //     }),
    // );
});

// Logout Admin
const logoutAdmin = asyncHandler(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "You had logout",
    });
});


// const userInfo = async(req, res) => {
//     // const { headers } = req;
//     const { headers, originalUrl } = req;
//     const userIp = headers['x-forwarded-for'] || req.connection.remoteAddress;
//     const userLocation = headers['cf-ipcountry'] || 'Location not available';
//     const lastVisitedPage = originalUrl;


//     console.log(`User IP: ${userIp}`);
//     console.log(`User Location: ${userLocation}`);
//     console.log(`Last Visited Page: ${lastVisitedPage}`);

//     try {
//         // const response = await axios.get(`http://api.ipstack.com/${userIp}?access_key=zaKY84pClF1EQ2SYHzI06bkoBNS54d3S`);
//         const response = await axios.get(`http://freegeoip.net/json/${ip}`);
//         console.log(response.data);
//         const { country_name, region_name } = response.data;
//         const userLocation = `${country_name}, ${region_name}`;

//         console.log(`User IP: ${userIp}`);
//         console.log(`User Location: ${userLocation}`);
//         console.log(`Last Visited Page: ${lastVisitedPage}`);

//         res.json({
//             userIp,
//             userLocation,
//             lastVisitedPage
//         });
//     } catch (error) {
//         console.log(`Error retrieving user location: ${error.message}`);
//         console.log(`User IP: ${userIp}`);
//         console.log(`Last Visited Page: ${lastVisitedPage}`);
//     }


//     // res.json({
//     //     userIp,
//     //     userLocation,
//     //     lastVisitedPage
//     // });
// }


// const userInfo = async(req, res) => {
//     const { headers, originalUrl } = req;
//     const userIp = headers['x-forwarded-for'] || req.connection.remoteAddress;
//     const lastVisitedPage = originalUrl;
//     const apiKey = "at_Ic6WoAvBuPz4Os0LJbwq0vxRi9Ea5";
//     console.log(`User IP: ${userIp}`);
//     console.log(`Last Visited Page: ${lastVisitedPage}`);

//     try {
//         // const response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${userIp}`);
//         const response = await axios.get(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${apiKey}&ipAddress=${userIp}`);
//         // console.log(response);
//         const { country_name, region_name } = response.data;
//         const userLocation = `${country_name}, ${region_name}`;

//         console.log(`User Location: ${userLocation}`);

//         res.json({
//             userIp,
//             userLocation,
//             lastVisitedPage
//         });
//     } catch (error) {
//         console.log(`Error retrieving user location: ${error.message}`);
//         console.log(`User IP: ${userIp}`);
//         console.log(`Last Visited Page: ${lastVisitedPage}`);
//         res.json({
//             userIp,
//             userLocation: "Location not available",
//             lastVisitedPage
//         });
//     }
// };
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