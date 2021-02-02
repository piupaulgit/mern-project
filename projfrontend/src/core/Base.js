import React from "react";
import Menu from "./Menu";
import sliderOne from '../assets/images/slider1_1920x960.png';
import sliderTwo from '../assets/images/slider2_1920x960.png'

const Base = ({ title = "page title", children }) => {
  return (
    <div className="base">
      <Menu></Menu>
      <div className="jumbotron bg-dark text-white text-center rounded-0 p-0">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={sliderOne} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={sliderTwo} alt="Second slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="main-content">{children}</div>
      <div className="jumbotron bg-dark text-white text-center rounded-0">
        <h2 className="text-white display-6">Footer</h2>
      </div>
    </div>
  );
};

export default Base;
