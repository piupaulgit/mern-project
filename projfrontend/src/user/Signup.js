import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    console.log("res");
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signupForm = () => {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={handleChange("name")}
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleChange("email")}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange("password")}
          ></input>
        </div>
        <input
          type="submit"
          className="btn btn-yellow btn-block"
          value="Register"
          onClick={onSubmit}
        ></input>
      </form>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        New Account created successfully. 
        <Link to="/signin"> Login now</Link>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  return (
    <Base title="Create Your New Account">
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-5 p-0 mx-auto">
            {successMessage()}
            {errorMessage()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 mx-auto p-5 mb-4 bg-light form-card">
            <h1 className="heading text-center mb-2">Register</h1>
            {signupForm()}
            <p className="text-center py-3">Already have an account? <Link to="/signup">Login Now</Link>.</p>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Signup;
