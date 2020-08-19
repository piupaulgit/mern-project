import React, { useEffect, useState } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    setProducts(loadCart());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const loadProducts = () => {
    return (
      <div className="bg-light p-4 row">
        {products.map((item, index) => {
          return (
            <div className="col-md-6" key={index}>
              <Card
                product={item}
                addtoCart={false}
                removeFromCart={true}
              ></Card>
            </div>
          );
        })}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div className="bg-info p-4">
        <p>This is for checkour section</p>
      </div>
    );
  };
  return (
    <Base title="My Cart">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-dark p-4">{loadProducts()}</div>
          <div className="col-md-6 text-light p-4">{loadCheckout()}</div>
        </div>
      </div>
    </Base>
  );
};

export default Cart;
