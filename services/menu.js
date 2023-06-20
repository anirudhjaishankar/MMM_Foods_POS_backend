const MenuItem = require("../models/menu_item");

async function getAllMenuItems() {
  return await MenuItem.find();
}

async function getMenuItemById(id) {
  return await MenuItem.findById(id);
}

async function createMenuItem(newMenuItem) {
  return await MenuItem.create(newMenuItem);
}

async function editMenuItem(menuItemId, updatedMenuItem) {
  return await MenuItem.findOneAndUpdate(
    { _id: menuItemId },
    updatedMenuItem
  );
}

async function deleteMenuItem(id) {
  return await MenuItem.findByIdAndDelete(id);
}

async function getMenuItemsByIds(ids) {
  return await MenuItem.find({ _id: { $in: ids } });
}

module.exports = {
  getAllMenuItems,
  getMenuItemById,
  createMenuItem,
  editMenuItem,
  deleteMenuItem,
  getMenuItemsByIds
};
