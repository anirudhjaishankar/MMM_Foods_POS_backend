const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderNumber: Number,
  orderItems: [{ itemId: mongoose.Types.ObjectId, quantity: Number }],
  total: Number,
  customer: { name: String, phone: String },
  orderDate: { type: Date, default: Date.now },
  comments: String,
  customerComments: {}
});

module.exports = mongoose.model("Order", OrderSchema);
