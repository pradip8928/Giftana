const Admin = require("../../models/authModel/adminModel");
const requireLogin = require("../../middleware/requiredLogin/requireLogin");
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const jwt = require("jsonwebtoken");
// const SuperAdmin = require("../../models/superAdminModel/createAdmin");
const ErrorHandler = require("../../utils/errorHandler");

// / registeration of Admin
const registerAdmin = asyncHandler(async(req, res) => {
    // console.log("came through frontend");

    // // console.log("my data is", req.body);
    const { adminName, password, email, role } = req.body;
    console.log("my data is", adminName, password, email, role);

    if (!adminName || !email || !password) {
        // return res.status(422).json({ error: "Please fill the data properly" });
        throw new Error(`Please fill the data properly`);
    }
    const adminExist = await Admin.findOne({ adminName });
    if (adminExist) {
        res.status(400);
        console.log("admin exist");
        throw new Error(`Admin with this ${email} already exists`);
    }

    const admin = await Admin.create({ adminName, email, password, role });
    if (admin) {
        console.log("admin created");
        res.status(201).json({
            id: admin._id,
            adminName: admin.adminName,
            email: admin.email,
            role: admin.role,
            token: generateToken(admin._id),
        });
    } else {
        res.status(400);
        throw new Error(`Error Occured`);
    }

    // const { adminName, email, password } = req.body;

    // console.log("data", adminName, email, password);

    // if (!adminName || !email || !password) {
    //     // return res.status(422).json({ error: "Please fill the data properly" });
    //     throw new Error(`Please fill the data properly`);
    // }

    // const adminExist = await Admin.findOne({ email });


    // Admin.findOne({ email })
    //     .then((adminExist) => {
    //         console.log("match", email);
    //         console.log("email alleady exist");
    //         if (adminExist) {
    //             return res.status(422).json({ error: "Email Allready exist" });
    //         }

    //         const admin = new Admin({ adminName, email, password });

    //         admin
    //             .save()
    //             .then(() => {
    //                 res.status(201).json({ message: "user registered successfully" });
    //             })
    //             .catch((err) => res.status(500).json({ error: "failed to regsiterd" }));
    //     })
    //     .catch((err) => console.log(err));
});
// Login

// login or authenticated Admin
const authAdmin = asyncHandler(async(req, res) => {
    const { adminName, password } = req.body;

    const admin = await Admin.findOne({ adminName });

    if (admin && (await admin.matchPassword(password))) {
        // verify token

        const token = generateToken(admin._id);
        res.cookie("access_token", token, {
            expires: new Date(Date.now() + 2000),
            httpOnly: true,
            // secure: process.env.NODE_ENV === "development",
        });

        res.send({
            _id: admin._id,
            adminName: admin.adminName,
            email: admin.email,
            role: admin.role,
            token: generateToken(admin._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
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