// const Catagory = require("../../models/catalogModel/catagoryModel");
// const ApiFeatures = require("../../utils/apiFeatures");
// const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
// const ErrorHandler = require("../../utils/errorHandler");
// const asyncHandler = require("express-async-handler");
// const mongoose = require("mongoose");
// // CREATE PRODUCT

// const createProduct = catchAsyncError(async(req, res, next) => {
//     try {
//         console.log("from postman");
//         const product = await Catagory.create(req.body);

//         res.status(201).json({
//             success: true,
//             product,
//         });
//     } catch (err) {
//         next(err);
//     }
// });


// // get Category products

// const getCategoryProducts = catchAsyncError(async(req, res, next) => {
//     try {
//         const category = await Catagory.findById(req.params.categoryId).populate('products');

//         res.status(200).json({
//             success: true,
//             products: category.products
//         });
//     } catch (err) {
//         next(err);
//     }
// });




// //  GET ALL PRODUCT

// const getAllProduct = catchAsyncError(async(req, res, next) => {
//     try {
//         const productCount = await Catagory.countDocuments();

//         //   const apiFeature = new ApiFeatures(Product.find(), req.query)

//         const data = await Catagory.find();

//         const resultPerPage = 25;

//         // console.log("my all data is", data);

//         const apiFeature = await new ApiFeatures(Catagory.find(), req.query)
//             .searchByProductName()
//             .filterByProductPrice()
//             .pagination(resultPerPage);

//         const products = await apiFeature.query;

//         res.status(200).json({
//             success: true,
//             products,
//             productCount,
//         });
//     } catch (err) {
//         next(err);
//     }
// });

// // GET DETAIL OF A PRODUCT

// const getProductDetail = catchAsyncError(async(req, res, next) => {
//     try {
//         const product = await Catagory.findById(req.params.id);

//         if (!product) {
//             return next(new ErrorHandler("Product not found", 404));
//         }
//         res.status(200).json({
//             success: true,
//             product,
//         });
//     } catch (err) {
//         next(err);
//     }
// });

// // UPDATE A PRODUCT

// const updateProduct = catchAsyncError(async(req, res, next) => {

//     try {
//         let product = await Catagory.findById(req.params.id);

//         if (!product) {
//             return next(new ErrorHandler("Product not found", 404));
//         }

//         product = await Catagory.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true,
//             useFindAndModify: false,
//         });

//         res.status(200).json({
//             success: true,
//             product,
//         });
//     } catch (err) {
//         next(err);
//     }
// });

// // deleting the single item
// const deleteOneProduct = catchAsyncError(async(req, res, next) => {
//     try {
//         const product = await Catagory.findById(req.params.id);

//         if (!product) {
//             return next(new ErrorHandler("Product not found", 404));
//         }
//         await product.remove();
//         res.status(200).json({
//             success: true,
//             message: "product deleted successfully",
//         });
//     } catch (err) {
//         next(err);
//     }
// });

// // const deleteMultipleProducts = catchAsyncError(async(req, res, next) => {
// //     try {
// //         // const productIds = req.query.productIds;
// //         const deleteProduct = await req.body;
// //         if (!deleteProduct) {
// //             return next(new ErrorHandler("Product not found", 404));
// //         }

// //         // const ids = await Catagory.find({
// //         //     _id: deleteProduct,
// //         // });

// //         // console.log(ids);
// //         const objectIds = deleteProduct.map((id) => mongoose.Types.ObjectId(id));
// //         await Catagory.deleteMany({ _id: { $in: objectIds } });
// //         // await Catagory.deleteMany({ _id: { $in: deleteProduct } });
// //         // await Catagory.deleteMany({ _id: { $in: productIds } });

// //         // deleteProduct.map(async(key) => {
// //         //     const objectId = mongoose.Types.ObjectId(key);
// //         //     // await Catagory.findByIdAndDelete({ _id: objectId });
// //         //     await Catagory.deleteOne({ _id: objectId });
// //         //     console.log(key);
// //         // });

// //         res.status(200).json({
// //             success: true,
// //             message: "products deleted successfully",
// //         });
// //     } catch (err) {
// //         console.log(`product is not deleted due to error: ${err.message}`);
// //         next(err);
// //     }
// // });
// const deleteMultipleProducts = catchAsyncError(async(req, res, next) => {
//     try {
//         const deleteProduct = await req.body;
//         if (!deleteProduct) {
//             return next(new ErrorHandler("Product not found", 404));
//         }

//         const objectIds = deleteProduct.map((id) => mongoose.Types.ObjectId(id));

//         await Catagory.deleteMany({ _id: { $in: objectIds } });

//         res.status(200).json({
//             success: true,
//             message: "products deleted successfully",
//         });
//     } catch (err) {
//         console.log(`product is not deleted due to error: ${err.message}`);
//         next(err);
//     }
// });

// module.exports = {
//     createProduct,
//     getCategoryProducts,
//     getAllProduct,
//     getProductDetail,
//     updateProduct,
//     deleteOneProduct,
//     deleteMultipleProducts,
// };