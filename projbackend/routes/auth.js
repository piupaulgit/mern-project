const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, signin, signout, isSignedIn } = require("../controllers/auth");

// signup  route
router.post(
  "/signup",
  [
    check("name", "name should be at least 3 character").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 character").isLength({
      min: 3,
    }),
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

// protected route
router.get("/test", (req, res) => {
  res.send('jkjkjk')
});

module.exports = router;
