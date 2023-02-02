const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const ManageProducts = require("../../models/catalogModel/manageProductsModel");
const ApiFeatures = require("../../utils/apiFeatures");
const path = require("path");
// const filePath = path.join(__dirname, '..', '..', 'models', 'catalogModel', 'ManageProductsModel');
// const ManageProducts = require(filePath);

// console.log(ManageProducts);
// creation Of Product

const createProduct = catchAsyncError(async (req, res, next) => {
  try {
    const manageProduct = await ManageProducts.create(req.body);

    res.status(201).json({
      success: true,
      manageProduct,
    });
  } catch (err) {
    next(err);
  }
});

// Ṛetriving Manage Products

const getAllProduct = catchAsyncError(async (req, res, next) => {
  try {
    const productCount = await ManageProducts.countDocuments();

    //   const apiFeature = new ApiFeatures(Product.find(), req.query)

    const resultPerpage = 5;

    const apiFeature = new ApiFeatures(ManageProducts.find(), req.query)
      .searchByProductName()
      .filterByProductPrice()
      .pagination(resultPerpage);

    const products = await apiFeature.query;

    res.status(200).json({
      success: true,
      products,
      productCount,
    });
  } catch (err) {
    next(err);
  }
});


// get the LowStockProducts

const getLowStockProducts = async(req, res) => {
    try {
        const lowStockProducts = await ManageProducts.find({ productStockQuantity: { $lt: 5 } });
        const lowStockCountDocuments = await ManageProducts.find({ productStockQuantity: { $lt: 5 } }).countDocuments();
        console.log(lowStockProducts);
        if (!lowStockProducts) {
            return res.status(400).json({ message: "No low stock products found" });
        }
        console.log(`no product found`);
        return res.status(200).json({ success: true, lowStockProducts, lowStockCountDocuments });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching low stock products", error });
    }
};

// GET DETAIL OF A PRODUCT

const getProductDetail = catchAsyncError(async (req, res, next) => {
  try {
    const product = await ManageProducts.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
});

// update Manage Products

const updateProduct = catchAsyncError(async (req, res, next) => {
  try {
    let product = await ManageProducts.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }

    product = await ManageProducts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    next(err);
  }
});

// Delete single products

// deleting the single item
const deleteOneProduct = catchAsyncError(async (req, res, next) => {
  try {
    const product = await ManageProducts.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    await product.remove();
    res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (err) {
    next(err);
  }
});

// Deleting Multiple Products
const deleteMultipleProducts = catchAsyncError(async (req, res, next) => {
  try {
    const deleteProduct = await req.body;
    if (!deleteProduct) {
      return next(new ErrorHandler("Product not found", 404));
    }

    const objectIds = deleteProduct.map((id) => mongoose.Types.ObjectId(id));

 
    await ManageProducts.deleteMany({ _id: { $in: objectIds } });
 




// GET DETAIL OF A PRODUCT
 

    res.status(200).json({
      success: true,
      message: "products deleted successfully",
    });
  } catch (err) {
    console.log(`product is not deleted due to error: ${err.message}`);
    next(err);
  }
});

const createProductReview = catchAsyncError(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.admin._id,
    name: req.admin.adminName,
    rating: Number(rating),
    comment,
  };

  const product = await ManageProducts.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.admin._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.admin._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// GET ALL REVIWS OF A PRODUCT

const getProductReviews = catchAsyncError(async (req, res, next) => {
  const product = await ManageProducts.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("Product Not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Reviews

const deleteReviews = catchAsyncError(async (req, res, next) => {
  const product = await ManageProducts.findById(req.query.productId);

  if (!product) {
    console.log("product is not there");
    return next(new ErrorHandler("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  const ratings = avg / reviews.length;

  const numOfReviews = reviews.length;

  await ManageProducts.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

module.exports = {
 
  createProduct,
  getAllProduct,
  getLowStockProducts,
  getProductDetail,
  updateProduct,
  deleteOneProduct,
  deleteMultipleProducts,
  createProductReview,
  getProductReviews,
  deleteReviews,
};
 
 
 
