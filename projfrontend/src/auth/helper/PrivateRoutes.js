import React from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from ".";


const PrivateRoute = ({ component: Component, ...rest }) =>{
    return (
        <Route
          {...rest}
          render={...props =>
            isAuthenticated() ? (
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

export default PrivateRoute;