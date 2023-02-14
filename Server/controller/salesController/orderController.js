const mongoose = require("mongoose");
const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const ApiFeatures = require("../../utils/apiFeatures");
const Order = require("../../models/saleModel/orderModel");
const Cart = require("../../models/saleModel/cartModel");
const Product = require("../../models/catalogModel/manageProductsModel");
const Admin = require("../../models/authModel/adminModel");

// creation Of Product

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
            totalAmount += product.price * item.quantity;
            items.push({
                productId: item.product,
                price: product.price * item.quantity,
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








// direct order

const createOrder = catchAsyncError(async(req, res, next) => {
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
    // items.forEach(async(item) => {
    //     const product = await Product.findById(item.productId);
    //     product.deliveryCount += item.quantity;
    //     await product.save();
    // });

    res.status(201).json({
        success: true,
        order,
    });
});

// get never purchased product
const neverpurchased = async(req, res, next) => {
    try {
        const unpurchasedProducts = await Product.find({ deliveryCount: 0 });
        const unpurchasedProductCount = await Product.find({ deliveryCount: 0 }).countDocuments();;
        if (!unpurchasedProducts) {
            return res.status(400).json({ message: "No unpurchased products found" });
        }
        return res.status(200).json({ success: true, unpurchasedProducts, unpurchasedProductCount });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching unpurchased products", error });
    }
}


// Get All Orders

const getAllOrders = catchAsyncError(async(req, res, next) => {
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

const updateOrder = catchAsyncError(async(req, res, next) => {
    const order = await Order.findById(req.params.id);

    console.log(order.orderStatus[0].type);

    if (order.orderStatus[0].type === "Delivered") {
        return next(
            new ErrorHandler("You have allready delivered this order", 400)
        );
    }

    order.items.forEach(async(o) => {
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

    product.stockQuantity -= quantity;

    product.save({ validateBeforeSave: false });
}

// delete order

const deleteOrder = catchAsyncError(async(req, res, next) => {
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
    neverpurchased,
    getAllOrders,
    updateOrder,
    deleteOrder,
};

























/*
for frontend 


import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;

    const fetchStates = async () => {
      const res = await fetch(
        `https://restcountries.com/v2/alpha/${selectedCountry}`
      );
      const data = await res.json();
      setStates(data.states);
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedState) return;

    const fetchDistricts = async () => {
      const res = await fetch(
        `https://api.example.com/states/${selectedState}/districts`
      );
      const data = await res.json();
      setDistricts(data.districts);
    };

    fetchDistricts();
  }, [selectedState]);

  return (
    <div>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
      <select>
        <option value="">


for backend 

router.get("/location/:type/:code", async (req, res) => {
  try {
    const type = req.params.type;
    const code = req.params.code;
    let response;

    if (type === "countries") {
      response = await axios.get("https://restcountries.com/v2/all");
      res.json({ success: true, data: response.data });
    } else if (type === "states") {
      response = await axios.get(
        `https://restcountries.com/v2/alpha/${code}`
      );
      res.json({ success: true, data: response.data.subdivisions });
    } else if (type === "districts") {
      response = await axios.get(`https://api.zippopotam.us/us/${code}`);
      res.json({ success: true, data: response.data.places });
    } else {
      res.json({ success: false, error: "Invalid type specified" });
    }
  } catch (error) {
    res.json({ success: false, error });
  }
});






*/