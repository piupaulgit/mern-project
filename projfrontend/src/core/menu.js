import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import '../styles/Menu.css';
const currentLink = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#fff" };
  } else {
    return { color: "#d2d1d1c2" };
  }
};
const Menu = ({ history }) => {
  return (
    <div className="menu">
      <div className="top-header">
      <ul className="d-flex top-header--nav">
        {!isAuthenticated() && (
          <React.Fragment>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-link d-flex align-items-center"
                style={currentLink(history, "/signup")}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-link d-flex align-items-center"
                style={currentLink(history, "/signin")}
              >
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                </span>
                Signin
              </Link>
            </li>
          </React.Fragment>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              to="/admin/dashboard"
              className="nav-link d-flex pl-0"
              style={currentLink(history, "/admin/dashboard")}
            >
              Admin dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && (
          <li className="nav-item ml-auto">
            <button
              className="btn btn-light btn-sm"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
              </svg>
              </span>
              sign out
            </button>
          </li>
        )}
        </ul>
      </div>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav w-100">
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
       
      </ul>
      </nav>
    </div>
    );
};

export default withRouter(Menu);
