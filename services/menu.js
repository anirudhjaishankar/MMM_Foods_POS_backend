const MenuItem = require('../models/menu_item');

async function getAllMenuItems() {
    return await MenuItem.find();
}

function getMenuItemsById() {}
function createMenuItem() {}
function editMenuItem() {}
function deleteMenuItem() {}

module.exports = {
    getAllMenuItems,
    getMenuItemsById,
    createMenuItem,
    editMenuItem,
    deleteMenuItem
}