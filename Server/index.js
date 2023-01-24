// Giftana

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");


dotenv.config();

// const { errorHandler, notFound } = require("./middleware/errorMiddleware")
// const userRoutes = require("./routes/userRoutes")
// const adminRoutes = require("./routes/adminRoutes")
// const catelogRoutes = require("./routes/catalogueRoutes")

const {
    errorHandler,
    notFound,
} = require("./middleware/errorHandler/errorMiddleware");
const errorMiddleware = require("./middleware/errorHandler/error");
const userRoutes = require("./routes/authRoutes/userRoutes");
const adminRoutes = require("./routes/authRoutes/adminRoutes");
const catagory = require("./routes/catalog/catagoryRoutes");
const manageProducts = require("./routes/catalog/manageProductsRoutes")
const reviewProduct = require("./routes/catalog/reviewProductRoutes")
const manufacturer = require("./routes/catalog/manufacturerProductRoutes")
const affiliates = require("./routes/promotionRoutes/affiliatesRoutes")
const compaign = require("./routes/promotionRoutes/compaignRoutes")
const discount = require("./routes/promotionRoutes/discountRoutes")

const message = require("./routes/systemRoutes/messageRoutes")
const rules = require("./routes/systemRoutes/rulesRoutes")

require("./config/database");
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
// }));
// app.options("*", cors());
// app.options("*", cors({ credentials: true, origin: 'http://localhost:3000' }));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });
// app.use(function(req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "http://localhost:3000");

//     res.header("Access-Control-Allow-Origin", "*"); // or specify a specific origin
//     res.header("Access-Control-Allow-Methods", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", "true"); // add this line
//     next();
// });
app.use((req, res, next) => {
    const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

const Port = process.env.PORT || 3000;
app.use(express.json()); // to accept json data
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/catalog", catagory);
app.use("/catalog", manageProducts);
app.use("/catalog", reviewProduct);
app.use("/catalog", manufacturer);


// promition
app.use("/promotion", affiliates);
app.use("/promotion", compaign);
app.use("/promotion", discount);

// rules
app.use("/system", message);
app.use("/system", rules);


app.use(notFound);
// app.use(errorHandler);
app.use(errorMiddleware);

// localhost:3000/api/admin/register
// localhost:3000/api/admin/register

app.listen(Port, () => {
    console.log(`port is running on ${Port}`);
});