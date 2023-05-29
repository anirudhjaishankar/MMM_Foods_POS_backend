const express = require('express')
const router = express.Router()
const { getAllOrders, deleteOrder, getOrderById, createOrder, editOrder } = require('../services/order')

router.get('/', async (_req, res) => {
    res.json(await getAllOrders())
})

router.get('/:id', async (req, res) => {
    res.json(await getOrderById(req.params.id))
})
router.post('/', async (req, res) => {
    res.json(await createOrder(req.body))
})
router.put('/', async (req, res) => {
    res.json(await editOrder(req.body))
})
router.delete('/:id', async (req, res) => {
    res.json(await deleteOrder(req.params.id))
})
module.exports = router;