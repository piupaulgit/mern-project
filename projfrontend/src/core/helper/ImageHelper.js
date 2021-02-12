import React from "react";
import { API } from "../../backend";
import defaultProductImage from '../../assets/images/default-product-img.jpg'

const ImageHelper = ({ product }) => {
  const imageUrl = false
    ? `${API}/product/photo/${product._id}`
    : defaultProductImage;
  return (
    <div>
      <img className="card-img-top" src={imageUrl} alt="Card image cap" />
    </div>
  );
};

export default ImageHelper;
