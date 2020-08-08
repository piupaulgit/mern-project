import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
    quantity: "",
    category: "",
    stock: "",
  });

  const { name, description, price, photo, quantity, stock, category } = values;
  const handleChange = (name) => (evnt) => {};
  const onSubmit = () => {};
  const createProductForm = () => {
    return (
      <form>
        <span className="d-block mb-2 font-weight-bold">Add new Product</span>
        <div className="form-group">
          <input
            onChange={handleChange("name")}
            name="name"
            className="form-control"
            placeholder="Name"
            value={name}
          />
        </div>
        <div className="form-group">
          <label className="btn btn-block btn-success">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image"
              placeholder="choose a file"
            />
          </label>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange("description")}
            name="description"
            className="form-control"
            placeholder="Description"
            value={description}
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("price")}
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
          />
        </div>
        <div className="form-group">
          <select
            onChange={handleChange("category")}
            className="form-control"
            placeholder="Category"
          >
            <option>Select</option>
            <option value="a">a</option>
            <option value="b">b</option>
          </select>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange("quantity")}
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={stock}
          />
        </div>

        <button type="submit" onClick={onSubmit} className="btn btn-dark">
          Create Product
        </button>
      </form>
    );
  };
  return (
    <Base titlt="Add Product">
      <div className="container bg-info p-4 my-4">
        <div className="row p-4">
          <div className="col-md-5 mx-auto">
            <Link to="/admin/dashboard" className="btn btn-warning mb-3">
              Go back to admin dashboard
            </Link>
            <div className="bg-light bg-light p-4">{createProductForm()}</div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
