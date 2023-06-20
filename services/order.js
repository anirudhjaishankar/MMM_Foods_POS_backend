const Order = require("../models/order");

const fields = "_id orderNumber total orderDate customer ";
const { getMenuItemsByIds } = require("./menu");

async function getAllOrders() {
  return await Order.find({}, fields);
}

async function getOrderById(id) {
  let order = await Order.findById(id);
  let orderItemIds = order.orderItems.map((item) => item.itemId.toString());
  let orderItems = await getMenuItemsByIds(orderItemIds);
  const orderItemsWithDetails = orderItems.map((item) => {
    let orderItem = order.orderItems.find(
      (i) => i.itemId.toString() === item._id.toString()
    );
    if (orderItem) {
      return {
        _id: item._id,
        price: item.price,
        quantity: orderItem.quantity,
        name: item.name,
        totalPrice: item.price * orderItem.quantity,
      };
    }
    // orderItem.name = item.name;
    // orderItem.price = item.price;
    // orderItem.totalPrice = item.price * orderItem.quantity;
    // return orderItem;
  });
  let orderDetails = {...order._doc, orderItems: orderItemsWithDetails};
  return orderDetails;
}

async function createOrder(newOrder) {
  return await Order.create(newOrder);
}

async function editOrder(updateOrderId, updatedOrder) {
  return await Order.findOneAndUpdate({ _id: updateOrderId }, updatedOrder);
}

async function deleteOrder(id) {
  return await Order.findByIdAndDelete(id);
}

async function getOrdersToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  console.log(date);
  return await Order.find({ orderDate: { $gte: date } }, fields);
}

async function getOlderOrders() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  console.log(date);
  return await Order.find({ orderDate: { $lt: date } }, fields);
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  editOrder,
  deleteOrder,
  getOrdersToday,
  getOlderOrders,
};
