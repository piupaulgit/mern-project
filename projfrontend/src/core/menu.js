import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Admin dashboard
          </Link>
        </li>
      </ul>
      <div className="ml-auto">
        <Link className="btn btn-light mr-2">Signup</Link>
        <Link className="btn btn-light mr-2">Signin</Link>
        <Link className="btn btn-light">sign out</Link>
      </div>
    </nav>
  );
};

export default withRouter(Menu);
