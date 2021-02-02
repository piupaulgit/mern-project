import React from 'react'
import { Link, withRouter } from "react-router-dom";
import '../styles/AdminSidenav.css'
import logo from '../assets/images/store-logo.jpg'
const currentLink = (history, path) => {
    if (history?.location.pathname === path) {
      return { backgroundcolor: '#deb513' };
    } 
    else{
        return { backgroundcolor: 'red' };
    }
  };
const AdminSidenav = ({ history }) => {
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
                        <Link to="/admin/create/category">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories">Manage Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product">Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products">Manage Products</Link>
                    </li>
                    {/* <li className="list-group-item">Manage Orders</li> */}
                </ul>
            </div>
        </div>
    )
}

export default AdminSidenav
