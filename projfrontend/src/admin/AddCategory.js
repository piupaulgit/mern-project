import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { addCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { user, token } = isAuthenticated();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (event) => {
    setCategoryName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addCategory(user._id, token, { name: categoryName })
      .then((data) => {
        if (data.error) {
          setErr(data.error);
          setSuccess("");
        } else {
          setSuccess("category successfully added");
          setErr("");
          setCategoryName("");
        }
      })
      .catch((err) => {
        setErr("Somthing went wrong");
      });
  };
  const addCategoryForm = () => {
    return (
      <form className="form-card bg-light p-5">
        <div className="form-group">
          <h2 className="heading">Add Category</h2>
          <input
            type="text"
            className="form-control"
            placeholder="For ex. Summer"
            name="categoryName"
            value={categoryName}
            required
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-dark mb-4" onClick={onSubmit}>
          Add
        </button>
      </form>
    );
  };
  const successMsg = () => {
    if (success) {
      return <p className="text-success">{success}</p>;
    }
  };
  const errorMsg = () => {
    if (err) {
      return <p className="text-danger">{err}</p>;
    }
  };
  return (
    <Base title="Add New Category" description="this is to add new categories">
      {/* <div className="container bg-info p-4 my-4">
        <div className="row p-4">
          <div className="col-md-5 mx-auto">
            <Link to="/admin/dashboard" className="btn btn-warning mb-3">
              Go back to admin dashboard
            </Link>
            <div className="bg-light bg-light p-4">
              {addCategoryForm()}
              {successMsg()}
              {errorMsg()}
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid add-category p-5">
        <div className="row">
          <div className="col-md-6">
            {addCategoryForm()}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
