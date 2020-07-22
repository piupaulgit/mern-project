const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");
const { getProductById } = require("../controllers/product");

router.param("userId", getUserById);
router.param("productId", getProductById);

module.exports = router;
