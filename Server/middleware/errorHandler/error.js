const ErrorHandler = require("../../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  if (err.message === "Unexpected end of JSON input") {
    const message = `product Not Found`;
    err = new ErrorHandler(message, 400);
  }

  // wrong product id error
  if (err.name === "CastError") {
    const message = `Resources not found Invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  if (err.code === 11000) {
    const message = `Duplicate  Entered`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "TokenExpiredError") {
    const message = `Json web token is Expired  , try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
