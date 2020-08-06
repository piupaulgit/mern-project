import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";

const AdminDashboard = () => {
  const leftSidebar = () => {
    return (
      <ul class="list-group">
        <li class="list-group-item bg-dark text-white font-weight-bold">
          Admin Menus
        </li>
        <li class="list-group-item">Category</li>
        <li class="list-group-item">product</li>
        <li class="list-group-item">Products</li>
        <li class="list-group-item">Orders</li>
      </ul>
    );
  };

  const rightContent = () => {
    return (
      <div>
        <h3 className="text-white">Hi! {isAuthenticated().user.name}</h3>
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
