const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  deleteOrder,
  getOrderById,
  createOrder,
  editOrder,
  getOrdersToday,
  getOlderOrders,
} = require("../services/order");

router.get("/", async (_req, res) => {
  res.json(await getAllOrders());
});

// router.get("/list", async (req, res) => res.json(await getOrdersToday()));

// router.get("/older", async (req, res) => res.json(await getOlderOrders()));

router.get("/:id", async (req, res) => {
  res.json(await getOrderById(req.params.id));
});
router.post("/", async (req, res) => {
  res.json(await createOrder(req.body));
});
router.put("/:id", async (req, res) => {
  res.json(await editOrder(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  res.json(await deleteOrder(req.params.id));
});
module.exports = router;
