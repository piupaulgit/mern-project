import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Base from "../core/Base";
import { signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didDirect: false,
  });

  const { email, password, error, loading, didDirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didDirect: true,
            });
          });
        }
      })
      .catch(() => {
        console.log("backend error");
      });
  };

  const signupIn = () => {
    return (
      <form>
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

  const performRedirect = () => {
    if (didDirect) {
      if ((user, user.role === 1)) {
        console.log("redirect to admin dashborad");
      } else {
        console.log("redirect to user dashboard");
      }
    }
  };
  const successMessage = () => {
    // return (
    //   <div
    //     className="alert alert-success"
    //     style={{ display: success ? "" : "none" }}
    //   >
    //     New Account successfully.
    //     <Link to="/signin">Login now</Link>
    //   </div>
    // );
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
    <Base title="Login to Your Account">
      {errorMessage()}
      <div className="row py-4">
        <div className="col-md-5 mx-auto border p-3 mb-4 ">
          <h1 className="display-5 font-weight-light mb-2">Login</h1>
          {signupIn()}
          {JSON.stringify(values)}
          {performRedirect()};
        </div>
      </div>
    </Base>
  );
};

export default Signin;
