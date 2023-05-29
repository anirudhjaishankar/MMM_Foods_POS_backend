const express = require('express') 
const router = express.Router()
const { getAllMenuItems, createMenuItem, getMenuItemsById, editMenuItem, deleteMenuItem } = require('../services/menu')
// router.get('/', (req, res) => {
//     res.send('Hello World from menu!')
// })

router.get('/', async (_req, res) => {
    res.json(await getAllMenuItems())
})

router.get('/:id', async(req, res) => {
    res.json(await getMenuItemById(req.params.id))
})

router.post('/', async (req, res) => {
    res.json(await createMenuItem(req.body))
})

router.put('/', async(req, res) => {
    res.json(await editMenuItem(req.body))
})
router.delete('/:id', async(req, res) => {
    res.json(await deleteMenuItem(req.params.id))
})

module.exports = router;