const Catagory = require("../../models/catalogModel/catagoryModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");

// CREATE PRODUCT

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Catagory.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});
//  GET ALL PRODUCT

exports.getAllProduct = catchAsyncError(async (req, res, next) => {
  const productCount = await Catagory.countDocuments();

  //   const apiFeature = new ApiFeatures(Product.find(), req.query)

  const apiFeature = new ApiFeatures(Catagory.find(), req.query)
    .search()
    .filter();

  const products = await apiFeature.query;

  res.status(200).json({
    success: true,
    products,
    productCount,
  });
});

// GET DETAIL OF A PRODUCT

exports.getProductDetail = catchAsyncError(async (req, res, next) => {
  const product = await Catagory.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// UPDATE A PRODUCT

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  let product = await Catagory.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Catagory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// DELETE PRODUCT

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Catagory.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
});
