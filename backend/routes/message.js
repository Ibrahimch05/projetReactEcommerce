const express = require("express");
const router = express.Router();

const {
  addMessage,
  getMessage,
  updateMessage,
  showAllMessages,
  dealOfMessage
} = require("../controllers/message");

router.post("/", addMessage);
router.put("/:id", updateMessage);
router.get("/", showAllMessages);
router.get("/:id", getMessage);
router.delete("/dealOfMessage/:id", dealOfMessage);

module.exports = router;