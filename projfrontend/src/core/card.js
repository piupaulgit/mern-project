import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product }, addToCart = true, removeFromCart = false) => {
  const showAddToCart = (adddToCart) => {
    return (
      adddToCart && (
        <a href="#" className="btn btn-success mr-2">
          Add to cart
        </a>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <a href="#" className="btn btn-danger">
          Remove from cart
        </a>
      )
    );
  };
  return (
    <div className="card mb-4">
      <ImageHelper product={product} />
      <div className="card-body">
        <h5 className="card-title">Product name</h5>
        <p className="card-text">
          Some quick example text to build on the card.
        </p>
        {showAddToCart(addToCart)}
        {showRemoveFromCart(removeFromCart)}
      </div>
    </div>
  );
};

export default Card;
