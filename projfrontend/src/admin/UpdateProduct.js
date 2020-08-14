import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories, getProduct } from "./helper/adminapicall";

const UpdateProduct = (props) => {
  // variables
  let productId;
  const [values, setValues] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    category: "",
    categories: [],
    stock: "",
  });

  const {
    name,
    description,
    photo,
    categories,
    category,
    stock,
    price,
  } = values;
  // ====================

  // use effect
  useEffect(() => {
    productId = props[0].match.params.productId;
    preLoad();
  }, []);
  // =======================

  // preload items
  const preLoad = () => {
    getProduct(productId).then((data) => {
      if (data.error) {
        console.log("product not found");
      } else {
        getAllCategories();
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock,
          category: data.category,
        });
      }
    });
  };
  // ===========================

  // get all categories
  const getAllCategories = () => {
    getCategories().then((data) => {
      console.log(data);
      if (data.error) {
        console.log("not categories found");
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  // =============================
  // update form html
  const updateProductForm = () => {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
          ></input>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={description}
          ></input>
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input className="form-control" type="file" name="photo"></input>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="form-control">
            {categories.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            type="text"
            name="price"
            value={price}
          ></input>
        </div>
        <div className="form-group">
          <label>stock</label>
          <input
            className="form-control"
            type="text"
            name="stock"
            value={stock}
          ></input>
        </div>
        <button type="submit" className="btn btn-dark">
          Update Product
        </button>
      </form>
    );
  };
  // =================

  return (
    <Base title="Update Product">
      <div className="container bg-info p-4 my-4">
        <div className="row p-4">
          <div className="col-md-5 mx-auto">
            <Link to="/admin/dashboard" className="btn btn-warning mb-3">
              Go back to admin dashboard
            </Link>
            <div className="bg-light bg-light p-4">{updateProductForm()}</div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default UpdateProduct;
