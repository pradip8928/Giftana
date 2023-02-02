const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const cartSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
//     cartItems: [{
//         product: { type: mongoose.Schema.Types.ObjectId, ref: 'ManageProducts', required: true },
//         quantity: { type: Number, default: 1 },
//         //price: { type: Number, required: true }
//     }]
// }, { timestamps: true });

const CartItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "ManageProducts",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
});

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        // ref: "User",
        ref: "Admin",
        required: true
    },
    items: [CartItemSchema]
});

// module.exports = mongoose.model("Cart", CartSchema);
const CartModel = mongoose.model('Cart', CartSchema);
module.exports = CartModel;

// module.exports = mongoose.model('Cart', cartSchema);