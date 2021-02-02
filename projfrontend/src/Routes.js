import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoute from "./auth/helper/AdminRoutes";
import UserDashborad from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import ManageCategory from "./admin/manageCategory";
import Cart from "./core/Cart";
import About from "./core/About";
import AdminDashboard from "./user/AdminDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute
          path="/user/dashboard"
          exact
          component={UserDashborad}
        ></PrivateRoute>
        <PrivateRoute path="/cart" exact component={Cart}></PrivateRoute>
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
        <AdminRoute
          path="/admin/products"
          exact
          component={ManageProducts}
        ></AdminRoute>
        <AdminRoute
          path="/admin/product/:productId"
          exact
          component={UpdateProduct}
        ></AdminRoute>
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategory}
        ></AdminRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
