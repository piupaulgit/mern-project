import React from "react";

const Base = ({ title = "page title", children }) => {
  return (
    <div className="container-fluid">
      <div className="jumbotron bg-info text-white text-center">
        <h2 className="text-white display-4">{title}</h2>
      </div>
      <div className="main-content">{children}</div>
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="text-white display-6">Footer</h2>
      </div>
    </div>
  );
};

export default Base;
