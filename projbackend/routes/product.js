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
  getUniqueCategories,
  getProductsByCategory,
  getCategoryProducts,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getCategoryById } = require("../controllers/category");

router.param("userId", getUserById);
router.param("productId", getProductById);
router.param("categoryId", getCategoryById);
router.param("categoryIdForProduct", getProductsByCategory);
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

// get product by categories
router.get("/category/products/:categoryIdForProduct", getCategoryProducts)

// get unique categories
router.get("/product/category", getUniqueCategories);
module.exports = router;
