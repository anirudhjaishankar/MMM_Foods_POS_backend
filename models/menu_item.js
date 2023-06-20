const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  itemNumber: Number,
  name: String,
  price: Number,
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);