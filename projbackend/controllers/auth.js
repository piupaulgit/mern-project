exports.signup = (req, res) => {
  res.json({
    Message: "sign up",
  });
};

exports.signout = (req, res) => {
  res.send("I am signing out now");
};
