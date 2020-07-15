const User = require("../models/user");
const { validationResult } = require("express-validator");
const expressJwt = require("express-jwt");
const expressJwt = require("jsonwebtoken");

// signup controller
exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return req.status(400).json({
        ErrorMessage: "Something went wrong",
      });
    }
    res.json({
      user: user,
    });
  });
};

// signin controller
exports.signin = (req, res) => {};
// signout controller
exports.signout = (req, res) => {
  res.send("I am signing out now");
};
