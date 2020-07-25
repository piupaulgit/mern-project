const Product = require("../models/product");
const { json } = require("body-parser");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const product = require("../models/product");

exports.getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((ree, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not found",
        });
      }
      req.product = product;
      next();
    });
};

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "something wrong with file",
      });
    }

    const { name, description, category, price, stock } = fields;
    if (!name || !description || !category || !price || !stock) {
      return res.status(400).json({
        error: "Please fill all the inputs",
      });
    }

    let product = new Product(fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "file size too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(product);
    });
  });
};

// get single product
exports.getProduct = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

exports.photo = (req, res) => {
  if (req.product.photo.data) {
    res.set("content-Type", req.product.photo.contentType);
    return res.json(req.product.photo.data);
  }
};

exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "something wrong with file",
      });
    }

    // update product is happening here
    let product = req.product;
    product = _.extend(product, fields);

    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "updatetion photo failed",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(product);
    });
  });
};

exports.removeProduct = (req, res) => {
  const product = req.product;
  product.remove((err, product) => {
    if (err) {
      return res.status(400).json({
        error: "product unable to delete",
      });
    }
    res.json({
      message: "product successfully deleted",
    });
  });
};

exports.getAllproducts = (req, res) => {
  const limit = res.query.limit ? parseInt(res.query.limit) : 10;
  const sortBy = res.query.sortBy ? res.query.sortBy : "_id";
  product
    .find()
    .select("-photo")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "no product found",
        });
      }
      res.json(products);
    });
};
