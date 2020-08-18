import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product }, addToCart = true, removeFromCart = false) => {
  const showAddToCart = (adddToCart) => {
    return (
      adddToCart && (
        <a href="#" class="btn btn-success mr-2">
          Add to cart
        </a>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <a href="#" class="btn btn-danger">
          Remove from cart
        </a>
      )
    );
  };
  return (
    <div class="card mb-4">
      <ImageHelper product={product} />
      <div class="card-body">
        <h5 class="card-title">Product name</h5>
        <p class="card-text">Some quick example text to build on the card.</p>
        {showAddToCart(addToCart)}
        {showRemoveFromCart(removeFromCart)}
      </div>
    </div>
  );
};

export default Card;
