import React from "react";
import Menu from "./Menu";
import sliderOne from '../assets/images/slider1_1920x960.png';
import sliderTwo from '../assets/images/slider2_1920x960.png'
import Footer from "./components/Footer";
import { isAuthenticated } from "../auth/helper";
import AdminSidenav from "./AdminSidenav";

const Base = ({ title = "page title", children }) => {
  return (
    <div className="base">
      {(isAuthenticated()?.user?.role !== 1) && (
              <Menu></Menu>
      )}
      <div className={"jumbotron bg-light text-white text-center rounded-0 p-0" + (isAuthenticated()?.user?.role === 1 ? ' d-none': '')}>
        { title === 'Home page' && isAuthenticated()?.user?.role !== 1 && (
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
        )}
        {title !== 'Home page' && isAuthenticated()?.user?.role !== 1 && (
          <div className="otherpage-banner">
            <h2 className="display-3">{title}</h2>
          </div>
          )
        }
        </div>
      
      { isAuthenticated() && isAuthenticated().user.role === 1 && (
        <div className="Admin-screen">
          <AdminSidenav></AdminSidenav>
          <div className="main-content">
          <div className="admin-header bg-light">
              <h2>{title}</h2>
          </div>{children}</div>
        </div>
      )}
      {
        isAuthenticated().user?.role !== 1 && (
          <div className="main-content">
            {children}
          </div>
        )
      }
     
      {/* footer */}
      <Footer>
      </Footer>
    </div>
  );
};

export default Base;
