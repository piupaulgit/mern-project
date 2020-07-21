const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require('./routes/category')

// db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("BD connected");
  })
  .catch(() => {
    console.log("something went wrong");
  });

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// port
const port = process.env.PORT || 3000;

// my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);

// starting server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
