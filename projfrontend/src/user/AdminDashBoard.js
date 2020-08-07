import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const leftSidebar = () => {
    return (
      <ul class="list-group">
        <li class="list-group-item bg-dark text-white font-weight-bold">
          Admin Menus
        </li>
        <li class="list-group-item">
          <Link to="/admin/create/category">Create Category</Link>
        </li>
        <li class="list-group-item">Create Product</li>
        <li class="list-group-item">Manage Products</li>
        <li class="list-group-item">Manage Orders</li>
      </ul>
    );
  };

  const rightContent = () => {
    return (
      <div>
        <h3 className="text-white">Hi! {name}</h3>
      </div>
    );
  };
  return (
    <Base title="AdminDashboard Page">
      <div className="container bg-info p-4 mb-4">
        <div className="row">
          <div className="col-md-4">{leftSidebar()}</div>
          <div className="col-md-8">{rightContent()}</div>
        </div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
