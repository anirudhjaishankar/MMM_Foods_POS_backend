const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
    itemNumber: { type: Number, },
    name: { type: String },
    price: { type: Number }
});

module.exports = mongoose.model("MenuItem", MenuItemSchema)