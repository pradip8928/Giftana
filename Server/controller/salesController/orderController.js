const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const ApiFeatures = require("../../utils/apiFeatures");
const Order = require("../../models/saleModel/orderModel");
const Cart = require("../../models/saleModel/cartModel");
const Product = require("../../models/catalogModel/manageProductsModel");
const Admin = require("../../models/authModel/adminModel");

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
 

    if (!cart) {
      return res.status(404).json({ msg: "Cart not found" });
    }

    // Calculate total amount of the order
    let totalAmount = 0;
    const items = [];
    for (const item of cart.items) {
      const product = await Product.findById(item.product);
      totalAmount += product.productPrice * item.quantity;
      items.push({
        productId: item.product,
        price: product.productPrice * item.quantity,
        quantity: item.quantity,
      });
    }

    // Create a new order object
    const order = new Order({
      user: req.user.id,
      totalAmount,
      items,
      shippingInfo: req.body.shippingInfo,
      paymentInfo: req.body.paymentInfo,
      // paymentStatus: req.body.paymentStatus,
      // paymentType: req.body.paymentType,
      orderStatus: req.body.orderStatus,
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

// direct order

const createOrder = catchAsyncError(async (req, res, next) => {
  const { totalAmount, items, shippingInfo, paymentInfo, orderStatus } =
    req.body;

  const order = await Order.create({
    totalAmount,
    items,
    shippingInfo,
    paymentInfo,
    orderStatus,
    user: req.admin._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// Get All Orders

const getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    console.log(order.totalPrice);
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    orders,
    totalAmount,
  });
});

// update Order status

const updateOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  console.log(order.orderStatus[0].type);

  if (order.orderStatus[0].type === "Delivered") {
    return next(
      new ErrorHandler("You have allready delivered this order", 400)
    );
  }

  order.items.forEach(async (o) => {
    await updateStock(o.productId, o.quantity);
  });

  order.orderStatus[0].type = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });

  console.log(order);
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.productStockQuantity -= quantity;

  product.save({ validateBeforeSave: false });
}

// delete order

const deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this id", 400));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});

module.exports = {
  placeOrder,
  createOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
