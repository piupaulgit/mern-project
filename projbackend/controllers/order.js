const { Order, ProductCart } = require("../models/order");

// params
exports.getOrderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", " name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "unable to find order",
        });
      }
      req.order = order;
      next();
    });
};

// routes
exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "fail to add order",
      });
    }
    res.json(order);
  });
};

// get all orders
exports.getAllOrders = (req, res) => {
  Order.find()
    .populate("user", "_id name")
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: "no order foound in DB",
        });
      }
      res.json(orders);
    });
};

exports.getOrderStatus = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};
exports.updateOrderStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: "can't update order status",
        });
      }
      res.json(order);
    }
  );
};
