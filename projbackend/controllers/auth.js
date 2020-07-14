const User = require("../models/user");

exports.signup = (req, res) => {
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

exports.signout = (req, res) => {
  res.send("I am signing out now");
};
