import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? `${API}/product/photo/${product._id}`
    : "https://images.unsplash.com/photo-1590554761158-f43c0f9695df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
  return (
    <div>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
    </div>
  );
};

export default ImageHelper;
