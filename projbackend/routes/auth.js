const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, signout } = require("../controllers/auth");

// signup up route
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

// signout up route
router.get("/signout", signout);

module.exports = router;
