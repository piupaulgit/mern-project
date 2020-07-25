const mongoose = require("mongoose");
const user = require("./user");
const { ObjectId } = mongoose.Schema;

const productCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const OrderSchema = new mongoose.Schema(
  {
    products: [productCartSchema],
    transaction_id: {},
    amount: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ProductCart = mongoose.model("ProductCart", productCartSchema);
const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };
