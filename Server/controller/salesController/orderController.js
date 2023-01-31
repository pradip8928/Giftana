const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError")
const ErrorHandler = require("../../utils/errorHandler");
const ApiFeatures = require("../../utils/apiFeatures");
const Order = require("../../models/saleModel/orderModel")
const Cart = require("../../models/saleModel/cartModel")
const ManageProducts = require("../../models/catalogModel/manageProductsModel")
const Admin = require("../../models/authModel/adminModel")

// creation Of Product

const placeOrder = catchAsyncError(async(req, res) => {
    try {
        // Find cart by user ID
        req.user = await Admin.findById(req.body.user);
        const cart = await Cart.findOne({ user: req.user.id });

        if (!cart) {
            return res.status(404).json({ msg: "Cart not found" });
        }

        // Calculate total amount of the order
        let totalAmount = 0;
        const items = [];
        for (const item of cart.items) {
            const product = await ManageProducts.findById(item.product);
            totalAmount += product.productPrice * item.quantity;
            items.push({
                productId: item.product,
                price: product.productPrice * item.quantity,
                quantity: item.quantity
            });
        }

        // Create a new order object
        const order = new Order({
            user: req.user.id,
            totalAmount,
            items,
            paymentStatus: req.body.paymentStatus,
            paymentType: req.body.paymentType,
            orderStatus: req.body.orderStatus
        });

        // Save the order to the database
        await order.save();

        // Delete the cart after the order is placed
        await Cart.findOneAndDelete({ user: req.user.id });

        return res.json({ order });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});






const getAllOrders = catchAsyncError(async(req, res, next) => {
    try {
        const orderCount = await Order.countDocuments();

        //   const apiFeature = new ApiFeatures(GiftCard.find(), req.query)

        // const apiFeature = new ApiFeatures(GiftCard.find(), req.query)
        //     .searchByGiftCardName()
        //     .filterByGiftCardPrice();

        // const giftCard = await apiFeature.query;
        const order = await Order.find();

        res.status(200).json({
            success: true,
            order,
            orderCount
        });
    } catch (err) {
        next(err);
    }
});






// const placeOrder = catchAsyncError(async(req, res) => {
//     try {
//         // Find cart by user ID
//         const cart = await Cart.findOne({ user: req.user.id });
//         if (!cart) {
//             return res.status(404).json({ msg: "Cart not found" });
//         }

//         // Calculate total amount of the order
//         let totalAmount = 0;
//         cart.items.forEach(async(item) => {
//             const product = await ManageProducts.findById(item.product);
//             totalAmount += product.price * item.quantity;
//         });

//         // Create a new order object
//         const order = new Order({
//             user: req.user.id,
//             totalAmount,
//             items: cart.items.map((item) => ({
//                 productId: item.product,
//                 payablePrice: item.price,
//                 purchasedQty: item.quantity,
//             })),
//             paymentStatus: "pending",
//             paymentType: req.body.paymentType,
//         });

//         // Save the order to the database
//         await order.save();

//         // Delete the cart after the order is placed
//         await Cart.findOneAndDelete({ user: req.user.id });

//         return res.json({ order });
//     } catch (err) {
//         console.error(err.message);
//         return res.status(500).send("Server Error");
//     }
// });

// module.exports = {
//     placeOrder,
// };













// const createProduct = catchAsyncError(async(req, res, next) => {
//     try {

//         const manageProduct = await Order.create(req.body);

//         res.status(201).json({
//             success: true,
//             manageProduct,
//         });
//     } catch (err) {
//         next(err);
//     }
// });


// const createOrder = (req, res) => {
//     Cart.deleteOne({ user: req.user._id }).exec((error, result) => {
//         if (error) return res.status(400).json({ error });
//         if (result) {
//             req.body.user = req.user._id;
//             req.body.orderStatus = [{
//                     type: "ordered",
//                     date: new Date(),
//                     isCompleted: true,
//                 },
//                 {
//                     type: "packed",
//                     isCompleted: false,
//                 },
//                 {
//                     type: "shipped",
//                     isCompleted: false,
//                 },
//                 {
//                     type: "delivered",
//                     isCompleted: false,
//                 },
//             ];
//             const order = new Order(req.body);
//             order.save((error, order) => {
//                 if (error) return res.status(400).json({ error });
//                 if (order) {
//                     res.status(201).json({ order });
//                 }
//             });
//         }
//     });

// }









// // Ṛetriving Manage Products


// const getAllProduct = catchAsyncError(async(req, res, next) => {
//     try {
//         const productCount = await Order.countDocuments();

//         //   const apiFeature = new ApiFeatures(Product.find(), req.query)

//         const apiFeature = new ApiFeatures(Order.find(), req.query)
//             .searchByProductName()
//             .filterByProductPrice();

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
//         const product = await Order.findById(req.params.id);

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



// // update Manage Products


// const updateProduct = catchAsyncError(async(req, res, next) => {

//     try {
//         let product = await Order.findById(req.params.id);

//         if (!product) {
//             return next(new ErrorHandler("Product not found", 404));
//         }

//         product = await Order.findByIdAndUpdate(req.params.id, req.body, {
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


// // Delete single products


// // deleting the single item
// const deleteOneProduct = catchAsyncError(async(req, res, next) => {
//     try {
//         const product = await Order.findById(req.params.id);

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


// // Deleting Multiple Products
// const deleteMultipleProducts = catchAsyncError(async(req, res, next) => {
//     try {
//         const deleteProduct = await req.body;
//         if (!deleteProduct) {
//             return next(new ErrorHandler("Product not found", 404));
//         }

//         const objectIds = deleteProduct.map((id) => mongoose.Types.ObjectId(id));

//         await Order.deleteMany({ _id: { $in: objectIds } });

//         res.status(200).json({
//             success: true,
//             message: "products deleted successfully",
//         });
//     } catch (err) {
//         console.log(`product is not deleted due to error: ${err.message}`);
//         next(err);
//     }
// });


/* 

const placeOrder = catchAsyncError(async (req, res) => {
  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    // Create a new order with the cart items
    const newOrder = new Order({
      user: req.user.id,
      items: cart.items
    });
    await newOrder.save();

    // Delete the cart after the order is placed
    await Cart.deleteOne({ user: req.user.id });

    return res.json(newOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// the placeOrder controller finds the cart for the user, creates a new order with the cart items, saves the new order, and deletes the cart. The new order is then returned as the response.
*/




module.exports = {
    // createProduct,
    // getAllProduct,
    // getProductDetail,
    // updateProduct,
    // deleteOneProduct,
    // deleteMultipleProducts,
    placeOrder,
    getAllOrders
};