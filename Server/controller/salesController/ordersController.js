const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Order = require("../../models/salesModel/orders");
const Product = require("../../models/catalogModel/catagoryModel");

const createOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.admin._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

const getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "adminName email"
  );
  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }
  res.status(200).json({
    success: true,
    order,
  });
});

// GET LOGGED IN USER ORDER

const myOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.admin._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// Get All Orders

const getAlOrders = catchAsyncError(async (req, res, next) => {
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

  if (order.orderStatus === "Delivered") {
    return next(
      new ErrorHandler("You have allready delivered this order", 400)
    );
  }

  order.orderItems.forEach(async (o) => {
    await updateStock(o.product, o.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.Stock -= quantity;

  product.save({ validateBeforeSave: false });
}

// delete Order

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
  createOrder,
  getSingleOrder,
  myOrders,
  getAlOrders,
  updateOrder,
  deleteOrder,
};
