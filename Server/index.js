// Giftana

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json()); // to accept json data
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
// const superAdmin = require("./routes/superAdminRoutes/superAdminRoute");

require("./config/database");
app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const Port = process.env.PORT || 3000;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
// app.use("/api/superadmin", superAdmin);
// app.use("/api/catelogRoutes", catelogRoutes);
app.use("/api/v1/catalog", catagory);
app.use(notFound);
// app.use(errorHandler);
app.use(errorMiddleware);

// localhost:3000/api/admin/register
// localhost:3000/api/admin/register

app.listen(Port, () => {
  console.log(`port is running on ${Port}`);
});
