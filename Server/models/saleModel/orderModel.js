const mongoose = require("mongoose");
const uniqueid = require("uniqueid");
// const uniqid = require("uniqid");

// const nanoid = require("nanoid");
// A

var first = uniqueid("prefix");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
    items: [
      {
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
      },
    ],
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pinCode: {
        type: Number,
        required: true,
      },
      phoneNo: {
        type: Number,
        required: true,
      },
    },

    paymentInfo: {
      paymentId: {
        type: String,
        // required: true,
        receipt: first(),

        // default: () => uniqueId(7),
        // index: { unique: true },
      },
      paymentStatus: {
        type: String,
        enum: ["pending", "completed", "cancelled", "refund"],
        default: "pending",
        required: true,
      },
      paymentType: {
        type: String,
        enum: ["cod", "card"],
        default: "card",
        required: true,
      },
    },

    orderStatus: [
      {
        type: {
          type: String,
          enum: ["ordered", "packed", "shipped", "Delivered"],
          default: "ordered",
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Order", orderSchema);
const OrderModel = mongoose.model("Order", orderSchema);
module.exports = OrderModel;

// https://github.com/Rizwan17/ecommerce-back-end-rest-server/blob/master/src/common-middleware/index.js
