import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product }) => {
  return (
    <div class="card mb-4">
      <ImageHelper product={product} />
      <div class="card-body">
        <h5 class="card-title">Product name</h5>
        <p class="card-text">Some quick example text to build on the card.</p>
        <a href="#" class="btn btn-primary">
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default Card;
