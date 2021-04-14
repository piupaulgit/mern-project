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
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoute = require("./routes/payment");

// db connection
mongoose.set('useFindAndModify', false);
mongoose
  .connect(process.env.DATABASE ||  "mongodb://localhost:27017/mernDb" , {
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
const port = process.env.PORT || 8000;

// my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoute);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

// starting server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
