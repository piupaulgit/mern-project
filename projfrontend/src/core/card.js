import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, addItemToWishlist, removeItemFromCart } from "./helper/cartHelper";
import { Link, Redirect } from "react-router-dom";
import '../styles/ProductCard.scss';

const Card = ({ product, addtoCart = true, addToWishList = true, removeFromWishList = false, removeFromCart = true, setReload = val => val, reload = undefined }) => {
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

  const addProductInWishlist = () => {
    addItemToWishlist(product, () => alert('item added'))
  }

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (adddToCart) => {
    return (
      addtoCart && (
        <button className="btn btn-dark mr-2" onClick={addToCart}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </button>
      )
    );
  };

  const showAddToWishlist = () => {
    return (
      addToWishList && (
        <button className="btn btn-danger text-light" onClick={addProductInWishlist}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
          </svg>
        </button>
      )
    )
  }
  const showRemoveFromWishList = () => {
    return (
      removeFromWishList && (
        <button className="btn btn-danger text-light" onClick={addProductInWishlist}>
          <svg id="Capa_1" className="heartBreak" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m475.327 76.053c-48.897-48.897-128.174-48.897-177.071 0l-2.819 2.83-25.709 70.077 68.408 57.786-81.074 103.546h-1.062l10.84-75.448-77.577-77.577 34.646-71.008-10.166-10.206c-48.897-48.897-128.174-48.897-177.071 0s-48.897 128.174 0 177.071l219.328 219.496 219.327-219.496c48.897-48.897 48.897-128.175 0-177.071z"/></g>
          </svg>
        </button>
      )
    )
  }

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button className="btn btn-danger" onClick={() => {removeItemFromCart(product._id); setReload(!reload)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
      )
    );
  };
  return (
   <div className="each-card-holder">
      <Link to={`/product/${product._id}`} className="product-link"> 
        <div className="card product-card">
          {getARedirect(redirect)}
          <ImageHelper product={product} />
        </div>
        <div className="card-body py-2 px-0 text-center">
          <h5 className="card-title text-capitalize mb-0">{cartTitle}</h5>
          <p className="price">₹ {cartPrice}</p>
        </div>
    </Link>
    <div className="add-to-cart">
        {showAddToCart(addtoCart)}
        {showAddToWishlist()}
        {showRemoveFromWishList()}
        {/* {showRemoveFromCart(removeFromCart)} */}
      </div>
   </div>
  );
};

export default Card;
