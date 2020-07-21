const User = require("../models/user");

exports.getUserById = (rer, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not there in DB",
      });
    }
    require.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  return res.json(req.profile);
};
