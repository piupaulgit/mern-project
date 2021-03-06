import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";
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
      <>
        {products.map((item, index) => {
          return (
            <tr key="index">
              <td>
                <Link to={`/product/${item._id}`}>
                  <span className="cart-product-img">
                    <ImageHelper product={item}></ImageHelper>
                  </span>
                  <span>{item.name}</span>
                </Link>
              </td>
              <td>
                {item.price}
              </td>
              <td>
                <input type="number" className="form-control small-input" min="1" value="1"></input>
              </td>
              <td>
                kjhjkjkh
              </td>
              <td>
                <button className="btn btn-light">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>
              </td>
            </tr>
          );
        })}
        </>
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
    <Base title="Your Cart">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-uppercase font-weight-light text-center mb-4">Your cart</h3>
            <table className="table border cart-table">
              <thead>
                <tr className="bg-light">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                  {products.length > 0 ? (
                    loadProducts(products)
                  ) : (
                    <h3>No Product in the cart</h3>
                  )}
              </tbody>
            </table>
          </div>
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
