const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderNumber: { type: Number },
  orderItems: [{ itemId: String, quanity: Number }],
  customer: { type: String },
  comments: { type: String }
});

module.exports = mongoose.model("Order", OrderSchema)