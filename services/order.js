const Order = require('../models/order')

async function getAllOrders() {
    return await Order.find();
}

async function getOrderById(id) {
    return await Order.findById(id);
}

async function createOrder(newOrder) {
    return await Order.create(newOrder);
}

async function editOrder(updatedOrder) {
    return await Order.update(updatedOrder);
}

async function deleteOrder(id) {
    return await Order.findByIdAndDelete(id);
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    editOrder,
    deleteOrder
}