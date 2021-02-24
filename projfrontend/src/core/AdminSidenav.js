import React from 'react'
import { Link, useHistory, withRouter } from "react-router-dom";
import '../styles/AdminSidenav.css'
import logo from '../assets/images/store-logo.jpg'
import { signout } from '../auth/helper';
const currentLink = (history, path) => {
    if (history.location.pathname === path) {
      return { backgroundColor: '#FFCC00' };
    } 
  };
const AdminSidenav = () => {
    let history = useHistory()
    return (
        <div className="admin-sidenav">
            <div className="sidenav">
                <a className="navbar-brand text-center d-block py-3 bg-light mr-0" href="#">
                    <img src={logo} alt></img>
                </a> 
                <h5>Admin Menus</h5>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/dashboard" style={currentLink(history,'/admin/dashboard')}>Dashboard</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" style={currentLink(history,'/admin/categories')}>Manage Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" style={currentLink(history,'/admin/products')}>Manage Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" style={currentLink(history,'/admin/orders')}>Manage Orders</Link>
                    </li>
                    <li className="pl-3 pt-5">
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
                        <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                        <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                    </svg>
                    </span>
                    Sign out
                    </button>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default AdminSidenav
