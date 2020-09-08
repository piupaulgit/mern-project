import React, { useEffect, useState } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import Paymentb from "./PaymentB";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);
  const getProducts = () => {
    setProducts(loadCart());
  };

  useEffect(() => {
    getProducts();
  }, [reload]);

  const loadProducts = (products) => {
    return (
      <div className="bg-light p-4 row">
        {products.map((item, index) => {
          return (
            <div className="col-md-6" key={index}>
              <Card
                product={item}
                addtoCart={false}
                removeFromCart={true}
                setReload={setReload}
                reload={reload}
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
        <Paymentb products={products} setReload={setReload}></Paymentb>
      </div>
    );
  };
  return (
    <Base title="My Cart">
      <div className="container">
        <h5>Products in Cart</h5>
        <div className="row">
          <div className="col-md-6 text-dark p-4">
            {products.length > 0 ? (
              loadProducts(products)
            ) : (
              <h3>No Product in the cart</h3>
            )}
          </div>
          <div className="col-md-6 text-light p-4">{loadCheckout()}</div>
        </div>
      </div>
    </Base>
  );
};

export default Cart;

export const emptyCart = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("cart");
    next();
  }
};
