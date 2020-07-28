import React from "react";
import Menu from "./menu";

const Base = ({ title = "page title", children }) => {
  return (
    <div className="container-fluid">
      <Menu></Menu>
      <div className="jumbotron bg-light text-white text-center rounded-0">
        <h2 className="text-dark display-4">{title}</h2>
      </div>
      <div className="main-content">{children}</div>
      <div className="jumbotron bg-dark text-white text-center rounded-0">
        <h2 className="text-white display-6">Footer</h2>
      </div>
    </div>
  );
};

export default Base;
