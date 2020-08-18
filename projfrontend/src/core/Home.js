import React from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";

const Home = () => {
  return (
    <Base title="Home page">
      <div className="row">
        <div className="col-md-3">
          <Card></Card>
        </div>
        <div className="col-md-3">
          <Card></Card>
        </div>
        <div className="col-md-3">
          <Card></Card>
        </div>
        <div className="col-md-3">
          <Card></Card>
        </div>
        <div className="col-md-3">
          <Card></Card>
        </div>
        <div className="col-md-3">
          <Card></Card>
        </div>
      </div>
    </Base>
  );
};

export default Home;
