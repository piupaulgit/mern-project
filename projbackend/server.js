const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("hello Piu"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
