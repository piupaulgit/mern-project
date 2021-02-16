import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { Link, Redirect } from "react-router-dom";
import '../styles/ProductCard.scss';

const Card = ({ product, addtoCart = true, removeFromCart = false, setReload = val => val, reload = undefined }) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "Default product name";
  const cartDescription = product
    ? product.description
    : "Default product description";
  const cartPrice = product ? product.price : "00.00";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (adddToCart) => {
    return (
      addtoCart && (
        <button className="btn btn-dark mr-2" onClick={addToCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button className="btn btn-danger" onClick={() => {removeItemFromCart(product._id); setReload(!reload)}}>
          Remove from cart
        </button>
      )
    );
  };
  return (
    <Link to="/"> 
        <div className="card product-card">
          {getARedirect(redirect)}
          <ImageHelper product={product} />
        </div>
        <div className="card-body py-2 px-0 text-center">
          <h5 className="card-title text-capitalize mb-0">{cartTitle}</h5>
          <p>Price: Rs. {cartPrice}</p>
        </div>
        <div className="add-to-cart">
          {showAddToCart(addtoCart)}
          {showRemoveFromCart(removeFromCart)}
        </div>
    </Link>
  );
};

export default Card;
