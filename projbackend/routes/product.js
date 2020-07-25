const express = require("express");
const router = express.Router();

const { getUserById } = require("../controllers/user");
const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  removeProduct,
  getAllproducts,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);
router.param("productId", getProductById);
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

// get single products
router.get("/product/:productId", getProduct);

// photo for single product
router.get("/product/photo/:productId", photo);

// update product
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

// delete product
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeProduct
);

// listing route
router.get("/product", getAllproducts);

module.exports = router;
