import React from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from ".";


const AdminRoute = ({ component: Component, ...rest }) =>{
    return (
        <Route
          {...rest}
          render={...props =>
            isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Component {...props}></Component>
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      );
}

export default AdminRoute;