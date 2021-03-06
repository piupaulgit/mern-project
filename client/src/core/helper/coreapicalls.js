import { API } from "../../backend";

// get all products
export const getAllProducts = () => {
  return fetch(`${API}/product`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};


// get single product
export const getSingleProduct = (productId) => {
  return fetch(`${API}/product/${productId}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// get products by category

export const getProductsByCategory = (categoryId) => {
  return fetch(`${API}/category/products/${categoryId}`, {
      method: "GET",
    })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
}