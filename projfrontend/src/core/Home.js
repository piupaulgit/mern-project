import React, { useState, useEffect } from "react";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getAllProducts } from "./helper/coreapicalls";

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
    </Base>
  );
};

export default Home;
