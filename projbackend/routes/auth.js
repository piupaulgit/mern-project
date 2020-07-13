var express = require("express");
var router = express.Router();

router.get("/signout", (req, res) => {
  res.send("I am signing out");
});

module.exports = router;
