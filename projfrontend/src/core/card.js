import React from "react";

const Card = () => {
  return (
    <div class="card mb-4">
      <img
        class="card-img-top"
        src="https://picsum.photos/200/150"
        alt="Card image cap"
      />
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
