import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories } from "./helper/adminapicall";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const { user, token } = isAuthenticated();

  useEffect(() => {
    preLoad();
  }, []);

  const preLoad = () => {
    getCategories().then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  //   const deleteThisProduct = (productId) => {
  //     deleteProduct(user._id, token, productId)
  //       .then((data) => {
  //         if (data.error) {
  //           console.log(data.error);
  //         } else {
  //           preLoad();
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  return (
    <Base title="Manage Category">
      <div className="container-fluid p-5">
        <div className="d-flex aling-items-center justify-content-between">
          <h2 className="heading mb-0">Category List</h2>
          <button className="btn btn-yellow">Add New Category</button>
        </div>
        <table className="table border mt-4">
          <thead className="bg-light">
            <tr >
              <th className="font-weight-light">Category Name</th>
              <th className="font-weight-light">Action</th>
            </tr>
          </thead>
          <tbody>
              {categories.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>
                        <Link
                          to={`/admin/product/${item._id}`}
                          className="btn btn-success mr-2 btn-sm"
                        >
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                          </span>
                          Edit
                        </Link>
                        <button
                          to="/"
                          className="btn btn-danger btn-sm"
                          //   onClick={() => deleteThisProduct(item._id)}
                        >
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                          </span>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
      {/* <div className="container bg-info p-4 my-4">
        <div className="row p-4">
          <div className="col-md-12">
            <table className="table bg-light">
              <tbody>
                {categories.map((item, index) => {
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
                          //   onClick={() => deleteThisProduct(item._id)}
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
      </div> */}
    </Base>
  );
};

export default ManageCategory;
