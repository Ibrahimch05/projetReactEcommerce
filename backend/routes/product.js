const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProduct,
  updateProduct,
  showAllProducts,
  dealOfTheWeak
} = require("../controllers/product");
const { uploadImage } = require("../middlewares/category");

router.post("/", uploadImage, addProduct);
router.put("/:id", uploadImage, updateProduct);
router.get("/", showAllProducts);
router.get("/:id", getProduct);
router.delete("/dealOfTheWeak/:id", dealOfTheWeak);

module.exports = router;

