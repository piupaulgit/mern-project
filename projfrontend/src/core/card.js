import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { Redirect } from "react-router-dom";

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
        <button className="btn btn-success mr-2" onClick={addToCart}>
          Add to cart
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
    <div className="card mb-4">
      {getARedirect(redirect)}
      <ImageHelper product={product} />
      <div className="card-body">
        <h5 className="card-title">{cartTitle}</h5>
        <p className="card-text">{cartDescription}</p>
        <p>Price: Rs. {cartPrice}</p>
        {showAddToCart(addtoCart)}
        {showRemoveFromCart(removeFromCart)}
      </div>
    </div>
  );
};

export default Card;
