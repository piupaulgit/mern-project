const User = require("../models/user");
const { validationResult } = require("express-validator");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

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
      console.log(err);
      return res.status(400).json({
        ErrorMessage: "Something went wrong",
      });
    }
    res.json({
      user: user,
    });
  });
};

// signin controller
exports.signin = (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User email not found is database",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email password does not match",
      });
    }

    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY);
    // put token in cookie
    res.cookie("token", token);

    // send response to frontend
    const { _id, name, email, role } = user;
    res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};
// signout controller
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfull",
  });
};

// is signedin checking
exports.isSignedIn = expressJwt({
  secret: process.env.SECRETKEY,
  userProperty: "auth",
  algorithms: ["HS256"],
});

// is authenticated
exports.isAuthenticated = (req, res, next) => {
  const checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      message: "access denied",
    });
  }
  next();
};

// is admin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      message: "you are not admin",
    });
  }

  next();
};
