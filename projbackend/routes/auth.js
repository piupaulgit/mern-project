const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, signin, signout } = require("../controllers/auth");

// signup  route
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("name should be more that 3 char"),
    check("email").isEmail().withMessage("Please provide valid email"),
  ],
  signup
);

// signin route
router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Please provide valid email"),
    check("password").isLength({ min: 1 }).withMessage("Pasword required"),
  ],
  signin
);

// signout route
router.get("/signout", signout);

module.exports = router;
