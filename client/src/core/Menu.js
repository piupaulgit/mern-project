import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import '../styles/Menu.css';
import logo from '../assets/images/store-logo.jpg'
import { loadCart, loadWishlist } from "./helper/cartHelper";
const currentLink = (history, path, activeColor, defaultColor) => {
  if (history.location.pathname === path) {
    return { color: activeColor };
  } else {
    return { color: defaultColor };
  }
};
const Menu = ({ history }) => {
  const [totalCartVal, setTotalCartVal] = useState('0')
  const [totalWishlistVal, setTotalWishlistVal] = useState('0')
  useEffect(() => {
    if(loadCart()){
      setTotalCartVal(loadCart().length)
    }
    if(loadWishlist()){
      setTotalWishlistVal(loadWishlist().length)
    }
    
    
  },[])
  return (
    <div className="menu">
      <div className="top-header d-flex align-items-center justify-content-between">
        <p className="text-light text-center text-sm mb-0">Welcome to Dummy StoreFront</p>
        <ul className="d-flex top-header--nav" >
        {!isAuthenticated() && (
          <React.Fragment>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-link d-flex align-items-center"
                style={currentLink(history, "/signup", "#fff", "#7d7777")}
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </span>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signin"
                className="nav-link d-flex align-items-center"
                style={currentLink(history, "/signin", "#fff", "#7d7777")}
              >
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
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
              style={currentLink(history, "/admin/dashboard",  "#fff", "#7d7777")}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
              </svg>
              </span>
              sign out
            </button>
          </li>
        )}
        </ul>
      </div>
        <nav className="navbar navbar-expand-sm">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt></img>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={currentLink(history, "/",  "#bada55", "#333")}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" style={currentLink(history, "/about",  "#bada55", "#333")}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/products" className="nav-link" style={currentLink(history, "/products",  "#bada55", "#333")}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/wishlist"
              className="nav-link cart-related"
              style={currentLink(history, "cart",  "#bada55", "#333")}
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                  <path d="M8 6.236l-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <span className="badge badge-danger">{totalWishlistVal}</span>
              </span>
            </Link>
          </li>
          
          <li className="nav-item">
            <Link
              to="/cart"
              className="nav-link cart-related"
              style={currentLink(history, "cart",  "#bada55", "#333")}
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <span className="badge badge-success">{totalCartVal}</span>
              </span>
            </Link>
          </li>
         
        </ul>
        </nav>
    </div>
    );
};

export default withRouter(Menu);
