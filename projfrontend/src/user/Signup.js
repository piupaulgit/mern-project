import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";

const Signup = () => {
  return (
    <Base title="register Now">
      <div className="row">
        <div className="col-md-5 mx-auto border p-3">
          <h1 className="display-5 font-weight-light mb-2">Sign up form</h1>
          <div className="form-group">
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Signup;
