const express = require("express");
const router = express.Router();

const {
  addMessage,
  getMessage,
  updateMessage,
  showAllMessages,
  dealOfMessage,
} = require("../controllers/message");

router.post("/add", addMessage);
router.put("/update/:id", updateMessage);
router.get("/all", showAllMessages);
router.get("/get/:id", getMessage);
router.delete("/deleteMessage/:id", dealOfMessage);

module.exports = router;
