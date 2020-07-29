import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signup = () => {
  const signupForm = () => {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"></input>
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Register"
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
        </div>
      </div>
    </Base>
  );
};

export default Signup;
