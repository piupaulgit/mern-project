import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getProducts, deleteProduct } from "./helper/adminapicall";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    preLoad();
  }, []);

  const preLoad = () => {
    getProducts().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  const deleteThisProduct = (productId) => {
    deleteProduct(user._id, token, productId)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          preLoad();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Base titlt="Manage Product">
      <div className="container bg-info p-4 my-4">
        <Link to="/admin/dashboard" className="btn btn-warning mb-3">
          Go back to admin dashboard
        </Link>
        <div className="row p-4">
          <div className="col-md-12">
            <table className="table bg-light">
              <tbody>
                {products.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        <Link
                          to={`/admin/product/${item._id}`}
                          className="btn btn-success"
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          to="/"
                          className="btn btn-danger"
                          onClick={() => deleteThisProduct(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default ManageProducts;
