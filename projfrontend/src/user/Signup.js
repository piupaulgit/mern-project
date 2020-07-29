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
          className="btn btn-primary btn-block"
          value="Register"
          onClick={onSubmit}
        ></input>
      </form>
    );
  };
  return (
    <Base title="Register Now">
      <div className="row py-4">
        <div className="col-md-5 mx-auto border p-3 mb-4 ">
          <h1 className="display-5 font-weight-light mb-2">Register</h1>
          {signupForm()}
          <p>name: {name}</p>
          <p>email: {email}</p>
          <p>password: {password}</p>
        </div>
      </div>
    </Base>
  );
};

export default Signup;
