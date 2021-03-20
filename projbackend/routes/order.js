const express = require("express");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const {
  getOrderById,
  getAllOrders,
  getOrderStatus,
  updateOrderStatus,
  createOrder,
} = require("../controllers/order");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { updateStock } = require("../controllers/product");
const router = express.Router();

///parram
router.param("userId", getUserById);
router.param("orderId", getOrderById);

// create new order

router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateStock,
  createOrder
);

// get all orders
router.get(
  "order/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

// status
router.get(
  "/order/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getOrderStatus
);

router.put(
  "/order/:orderId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateOrderStatus
);

module.exports = router;
