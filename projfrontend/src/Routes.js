import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoute from "./auth/helper/AdminRoutes";
import UserDashborad from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute
          path="/user/dashboard"
          exact
          component={UserDashborad}
        ></PrivateRoute>
        <AdminRoute
          path="/admin/dashboard"
          exact
          component={AdminDashboard}
        ></AdminRoute>
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        ></AdminRoute>
        <AdminRoute
          path="/admin/create/product"
          exact
          component={AddProduct}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
