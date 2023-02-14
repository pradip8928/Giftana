/*
const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const ManageProducts = require("../../models/catalogModel/manageProductsModel");
const Category = require("../../models/catalogModel/catagoryModel")
const ApiFeatures = require("../../utils/apiFeatures");
const path = require("path");

// creation Of Product

const createProduct = catchAsyncError(async(req, res, next) => {
    try {
        const manageProduct = await ManageProducts.create(req.body);
        // const manageProduct = await ManageProducts.create({
        //     ...req.body,
        //     category: req.body.category
        // });
        const categoryId = req.body.category;
        // const updatedCategory = await Category.findByIdAndUpdate(
        //     category, { $push: { products: manageProduct._id } }, { new: true }
        // );
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId, { $push: { products: manageProduct._id } }, { new: true }
        );
        if (!updatedCategory) {
            return next(new ErrorResponse(`Category not found with id of ${categoryId}`, 404));
        }



        res.status(201).json({
            success: true,
            manageProduct,
            updatedCategory
        });
    } catch (err) {
        next(err);
    }
});

// Ṛetriving Manage Products

const getAllProduct = catchAsyncError(async(req, res, next) => {
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

const getProductDetail = catchAsyncError(async(req, res, next) => {
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

const updateProduct = catchAsyncError(async(req, res, next) => {
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
const deleteOneProduct = catchAsyncError(async(req, res, next) => {
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
const deleteMultipleProducts = catchAsyncError(async(req, res, next) => {
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

const createProductReview = catchAsyncError(async(req, res, next) => {
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

const getProductReviews = catchAsyncError(async(req, res, next) => {
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

const deleteReviews = catchAsyncError(async(req, res, next) => {
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
        req.query.productId, {
            reviews,
            ratings,
            numOfReviews,
        }, {
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


*/



// ///////////////////////////Tested Code///////////////////////




const Product = require("../../models/catalogModel/manageProductsModel");
const Subcategory = require("../../models/catalogModel/subCategoryModel");
const Category = require("../../models/catalogModel/catagoryModel");

// exports.createProduct = async(req, res) => {
//     const { name, subcategories } = req.body;

//     try {
//         let product = await Product.findOne({ name });
//         if (product) {
//             return res.status(400).json({ errors: [{ msg: "Product already exists" }] });
//         }

//         product = new Product({ name });

//         if (subcategories && subcategories.length > 0) {
//             // get subcategory objects from the database
//             const subcategoryObjects = await Subcategory.find({
//                 _id: { $in: subcategories }
//             });
//             console.log(subcategoryObjects);

//             // check if all subcategories exists
//             if (subcategoryObjects.length !== subcategories.length) {
//                 return res.status(400).json({ errors: [{ msg: "Invalid subcategory" }] });
//             }

//             // update product subcategories field with subcategory objects
//             product.subcategories = subcategoryObjects;

//             // update subcategory products field with product object
//             subcategoryObjects.forEach(subcategory => {
//                 subcategory.products.push(product);
//                 subcategory.save();
//             });
//         }

//         await product.save();

//         res.json(product);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server error");
//     }
// };

exports.createProduct = async(req, res) => {
    const { name, SKU, image, price, stockQuantity, limitationInStore, published, subcategories } = req.body;

    try {
        let product = await Product.findOne({ name });
        if (product) {
            return res.status(400).json({ errors: [{ msg: "Product already exists" }] });
        }

        product = new Product({ name, SKU, image, price, stockQuantity, limitationInStore, published, subcategories: subcategories });

        await product.save();

        if (subcategories && subcategories.length > 0) {
            // update subcategory products field with product object
            // await Subcategory.updateMany({ _id: { $in: subcategories } }, { $push: { productIds: product._id } });
            await Subcategory.updateMany({ _id: { $in: subcategories } }, { $push: { productIds: { $each: [product._id] } } });
        }

        res.json({...product._doc, subcategories: subcategories });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

exports.getProducts = async(req, res) => {
    try {
        // const product = await Product.find();
        // console.log(product);
        const products = await Product.find().populate("subcategories", ["name", "category"]);
        // const products = await Product.find().populate("subcategories").exec();
        // const products = await Product.find().populate("subcategories", "_id name");
        // const products = await Product.find().populate("subcategories");
        res.json(products);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};
exports.updateProduct = async(req, res) => {
    const { name, subcategories } = req.body;

    const productFields = {};
    if (name) productFields.name = name;
    if (subcategories && subcategories.length > 0) productFields.subcategories = subcategories;

    try {
        let product = await Product.findById(req.params.id).populate("subcategories");
        if (!product) {
            return res.status(404).json({ errors: [{ msg: "Product not found" }] });
        }

        if (subcategories) {
            // get subcategory objects from the database
            const subcategoryObjects = await Subcategory.find({
                _id: { $in: subcategories }
            });

            // check if all subcategories exists
            if (subcategoryObjects.length !== subcategories.length) {
                return res.status(400).json({ errors: [{ msg: "Invalid subcategory" }] });
            }

            // remove the product from previous subcategories
            product.subcategories.forEach(subcategory => {
                subcategory.products = subcategory.products.filter(p => p._id.toString() !== product._id.toString());
                subcategory.save();
            });

            // add the product to the new subcategories
            subcategories.forEach(subcategoryId => {
                Subcategory.findById(subcategoryId)
                    .then(subcategory => {
                        subcategory.products.unshift(product._id);
                        subcategory.save();
                    })
                    .catch(err => console.error(err.message));
            });

            product.subcategories = subcategories;
            await product.save();

            res.json(product);
        }


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}


exports.deleteProduct = async(req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ msg: "Product not found" });
        }

        product.subcategories.forEach(subcategory => {
            subcategory.products = subcategory.products.filter(
                p => p._id.toString() !== product._id.toString()
            );
            subcategory.save();
        });

        await product.remove();

        res.json({ msg: "Product removed" });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};