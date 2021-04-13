import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getAllProducts } from "./helper/coreapicalls";
import aboutImage from '../assets/images/about-img.jpg'
import { Link } from "react-router-dom";
import Categories from "./components/Categories";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadAllProduct();
  }, []);

  const loadAllProduct = () => [
    getAllProducts()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProducts(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      }),
  ];
  return (
    <Base title="Home page">
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-md-5">
            <img src={aboutImage}></img>
          </div>
          <div className="col-md-7 pl-5">
            <h3 className="heading">ABOUT US</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum? Distinctio saepe nulla omnis, sit provident ad sunt perspiciatis quo, id ducimus magnam recusandae nesciunt, dolor dolorem illo fugit consequatur. Placeat sit at deleniti possimus nobis enim dolor velit porro? Eaque quos labore molestias culpa harum sequi eligendi? Deserunt nisi quod doloribus nam praesentium omnis illo itaque iure enim et?</p>
            <Link to="/about" className="btn btn-yellow">Read More</Link>
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="bg-light py-5 my-5">
          <Categories></Categories>
      </div>
      {/* categories */}
      <div className="container">
        <h2 className="text-center heading mt-4 mb-5">Products</h2>
        <div className="row">
        {products &&
          products.map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <Card product={item}></Card>
              </div>
            );
          })}
        </div>
      </div>
      
    </Base>
  );
};

export default Home;
