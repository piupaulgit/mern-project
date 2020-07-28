import React from "react";
import { Link, withRouter } from "react-router-dom";
const currentLink = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#fff" };
  } else {
    return { color: "#d2d1d1c2" };
  }
};
const Menu = ({ history }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={currentLink(history, "/")}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/cart"
            className="nav-link"
            style={currentLink(history, "cart")}
          >
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            style={currentLink(history, "dashboard")}
          >
            dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            style={currentLink(history, "adminDashboard")}
          >
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
