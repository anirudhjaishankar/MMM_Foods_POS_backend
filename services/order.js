const Order = require('../models/order')

async function getAllOrders() {
    return await Order.find();
}
function createOrder() {}
function editOrder() {}
function deleteOrder() {}

module.exports = {
    getAllOrders,
    createOrder,
    editOrder,
    deleteOrder
}