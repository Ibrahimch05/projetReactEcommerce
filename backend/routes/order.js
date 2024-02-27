const express = require("express");
const router = express.Router();

const {
  addOrder,
  getOrder,
  updateOrder,
  showAllOrders,
  dealOfOrder,
} = require("../controllers/order");

router.post("/", addOrder);
router.put("/:id", updateOrder);
router.get("/all", showAllOrders);
router.get("/:id", getOrder);
router.delete("/dealOfOrder/:id", dealOfOrder);

module.exports = router;
