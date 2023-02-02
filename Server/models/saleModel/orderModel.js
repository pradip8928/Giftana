const mongoose = require("mongoose");
// A









const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },

    totalAmount: {
        type: Number,
        required: true,
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ManageProducts",
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    }, ],
    paymentStatus: {
        type: String,
        enum: ["pending", "completed", "cancelled", "refund"],
        required: true,
    },
    paymentType: {
        type: String,
        enum: ["cod", "card"],
        required: true,
    },
    orderStatus: [{
        type: {
            type: String,
            enum: ["ordered", "packed", "shipped", "delivered"],
            default: "ordered",
        },
        date: {
            type: Date,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    }, ],
}, { timestamps: true });

// module.exports = mongoose.model("Order", orderSchema);
const OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel;








// https://github.com/Rizwan17/ecommerce-back-end-rest-server/blob/master/src/common-middleware/index.js