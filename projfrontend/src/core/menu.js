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
        <li className="nav-item">
          <Link
            to="/signup"
            className="nav-link"
            style={currentLink(history, "/signup")}
          >
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/signin"
            className="nav-link"
            style={currentLink(history, "/signin")}
          >
            Signin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Menu);
