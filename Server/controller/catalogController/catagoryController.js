const Catagory = require("../../models/catalogModel/catagoryModel");
const ApiFeatures = require("../../utils/apiFeatures");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");

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

  const apiFeature = new ApiFeatures(
    Catagory.find(),
    req.query
  ).searchByProductName();

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

exports.deleteOneProduct = catchAsyncError(async (req, res, next) => {
  const product = await Catagory.findById(req.params.id);

  console.log("in");
  console.log("product is", product);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
});

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  console.log("hii");
  const deleteProduct = await req.body;

  console.log("IN");

  console.log("not Items is", deleteProduct);

  // if (!deleteProduct) {
  //   return next(new ErrorHandler("Product not found", 404));
  // }

  const ids = await Catagory.find({
    _id: deleteProduct,
  });

  console.log(ids);
  deleteProduct.map(async (key) => {
    // await Catagory.remove({ _id: `${key}` });
    await Catagory.findByIdAndDelete({ _id: key });
    console.log(key);
  });

  res.status(200).json({
    success: true,
    message: "products deleted successfully",
  });
});
