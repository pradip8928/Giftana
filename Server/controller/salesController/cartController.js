const mongoose = require("mongoose");
const Cart = require("../../models/saleModel/cartModel")
const ManageProducts = require("../../models/catalogModel/manageProductsModel")
const Admin = require("../../models/authModel/adminModel")
    // const ManageProducts = require("../manageProductsController/manageProductsModel");

const catchAsyncError = require("../../middleware/errorHandler/catchAsyncError")

const createCart = catchAsyncError(async(req, res) => {
    try {
        console.log(req.body);
        const product = await ManageProducts.findById(req.body.items[0].product);
        req.user = await Admin.findById(req.body.user);
        console.log(req.user);
        console.log(product);
        if (!product) {
            return res.status(404).json({ msg: "ManageProducts not found" });
        }
        console.log("product found");
        console.log(req.body.user);

        const cart = await Cart.findOne({ user: req.user.id });
        console.log(cart);
        if (!cart) {
            const newCart = new Cart({
                user: req.user.id,
                items: [{
                    product: product._id,
                    quantity: req.body.items[0].quantity,
                    price: req.body.items[0].quantity * product.productPrice
                }]
            });
            await newCart.save();
            return res.json(newCart);
        }
        const cartItemIndex = cart.items.findIndex(
            item => item.product.toString() === product._id.toString()
        );
        if (cartItemIndex === -1) {
            cart.items.push({
                product: product._id,
                quantity: req.body.items[0].quantity,
                price: req.body.items[0].quantity * product.productPrice
            });
        } else {
            cart.items[cartItemIndex].quantity += req.body.items[0].quantity;
            // cart.items[cartItemIndex].price += req.body.items[0].quantity;
            cart.items[cartItemIndex].price += req.body.items[0].quantity * product.productPrice;
        }
        await cart.save();
        return res.json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

const getAllCart = catchAsyncError(async(req, res, next) => {
    try {
        const cartCount = await Cart.countDocuments();

        //   const apiFeature = new ApiFeatures(GiftCard.find(), req.query)

        // const apiFeature = new ApiFeatures(GiftCard.find(), req.query)
        //     .searchByGiftCardName()
        //     .filterByGiftCardPrice();

        // const giftCard = await apiFeature.query;
        const cart = await Cart.find();
        console.log();
        res.status(200).json({
            success: true,
            cart,
            cartCount
        });
    } catch (err) {
        next(err);
    }
});

const getCustomerWithCart = async(req, res, next) => {
    Cart.find()
        .populate('user', 'adminName email')
        .exec((err, carts) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(carts);
        })
}

/*

const getCustomerWithCart = catchAsyncError(async (req, res, next) => {
  const  user= await Admin.findById(req.params.id)
    .populate('cart.productId', 'name price')
    .select('name email cart');

  if (!user) {
    return next(new AppError(404, 'No customer found with that ID'));
  }

  res.status(200).json({
    success: true,
    user,
  });
});



*/
module.exports = {
    createCart,
    getAllCart,
    getCustomerWithCart

};