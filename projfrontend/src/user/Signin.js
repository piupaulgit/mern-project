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
          className="btn btn-yellow btn-block"
          value="Login"
          onClick={onSubmit}
        ></input>
      </form>
    );
  };

  const performRedirect = () => {
    if (didDirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard"></Redirect>;
      } else {
        return <Redirect to="/user/dashboard"></Redirect>;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/"></Redirect>;
    }
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
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <div className="row">
              <div className="mx-auto col-md-5 p-0">
               {errorMessage()}
              </div>
            </div>
          </div>
          <div className="col-md-5 mx-auto p-5 mb-4 bg-light form-card">
            <h1 className="text-center mb-2 heading">Login</h1>
            {signupIn()}
            <p className="text-center py-3">Don't have an account? <Link to="/signup">Register Now</Link>.</p>
            {performRedirect()}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Signin;
