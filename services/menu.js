const MenuItem = require('../models/menu_item');

async function getAllMenuItems() {
    return await MenuItem.find()
}

async function getMenuItemById(id) {
    return await MenuItem.findById(id)
}

async function createMenuItem(newMenuItem) {
    return await MenuItem.create(newMenuItem)
}

async function editMenuItem(updatedMenuItem) {
    return await MenuItem.updateOne(updatedMenuItem);
}

async function deleteMenuItem(id) {
    return await MenuItem.findByIdAndDelete(id);
}

module.exports = {
    getAllMenuItems,
    getMenuItemById,
    createMenuItem,
    editMenuItem,
    deleteMenuItem
}