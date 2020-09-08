const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getToken, porecessPayment } = require("../controllers/payment");
const router = express.Router();

router.get("/payment/gettoken/:userId", isSignedIn, isAuthenticated, getToken);
router.post(
  "/payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  porecessPayment
);

module.exports = router;
