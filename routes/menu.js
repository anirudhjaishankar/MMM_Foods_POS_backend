const express = require("express");
const router = express.Router();
const {
  getAllMenuItems,
  createMenuItem,
  getMenuItemById,
  editMenuItem,
  deleteMenuItem,
  getMenuItemsByIds
} = require("../services/menu");
// router.get('/', (req, res) => {
//     res.send('Hello World from menu!')
// })

router.get("/", async (_req, res) => {
  res.json(await getAllMenuItems());
});

router.get("/ids", async (req, res) => {
  const ids = req.query.ids.split(",");

  res.json(await getMenuItemsByIds(ids));
});

router.get("/:id", async (req, res) => {
  res.json(await getMenuItemById(req.params.id));
});

router.post("/", async (req, res) => {
  res.json(await createMenuItem(req.body));
});

router.put("/:id", async (req, res) => {
  res.json(await editMenuItem(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  res.json(await deleteMenuItem(req.params.id));
});

module.exports = router;
