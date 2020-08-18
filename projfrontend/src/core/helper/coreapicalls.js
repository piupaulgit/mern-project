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
