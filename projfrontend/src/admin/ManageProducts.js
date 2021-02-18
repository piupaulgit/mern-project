import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getProducts, deleteProduct, getCategories } from "./helper/adminapicall";
import AdminBase from "../core/AdminBase";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalType, setModalType] = useState('add')
  const { user, token } = isAuthenticated();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: new FormData(),
  })
  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = formValues;

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
    getCategories().then((data) => {
      if (data.error) {
        setFormValues({ ...formValues, error: data.error });
      } else {
        setFormValues({ ...formValues, categories: data, formData: new FormData() });
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

  const openModal = () => {

  }

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const createForm = () =>
    (
      <form>
        <div className="form-group">
            <input type="text" 
            className="form-control" 
            placeholder="Product Name" 
            name="name" 
            onChange={handleChange('name')} 
            value={name}></input>
        </div>
        <div className="form-group">
           <textarea className="form-control" 
           placeholder="Product description"
           name="description" 
           rows="3"
           onChange={handleChange('description')}
           value={description}></textarea>
        </div>
        <div className="form-group">
          <input 
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            className="form-control"
            placeholder="choose a file"></input>
        </div>
        <div className="form-group">
          <select className="form-control" 
            onChange={handleChange("category")} name="category" placeholder="Product Category">
            <option>Select Category</option>
            {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <input type="number" 
          placeholder="Price" 
          onChange={handleChange('price')}
          name="price"
          value={price} 
          className="form-control"></input>
        </div>
        <div className="form-group">
          <input type="number" 
          name="stock" 
          onChange={handleChange('stock')}
          value={stock} 
          placeholder="Stock" className="form-control"></input>
        </div>
        <button className="btn btn-dark">Add</button>
      </form>
    )
  
  return (
    // <Base titlt="Manage Product">
    //   <div className="container bg-info p-4 my-4">
    //     <Link to="/admin/dashboard" className="btn btn-warning mb-3">
    //       Go back to admin dashboard
    //     </Link>
    //     <div className="row p-4">
    //       <div className="col-md-12">
    //         <table className="table bg-light">
    //           <tbody>
    //             {products.map((item, index) => {
    //               return (
    //                 <tr key={index}>
    //                   <td>{item.name}</td>
    //                   <td>
    //                     <Link
    //                       to={`/admin/product/${item._id}`}
    //                       className="btn btn-success"
    //                     >
    //                       Update
    //                     </Link>
    //                   </td>
    //                   <td>
    //                     <button
    //                       to="/"
    //                       className="btn btn-danger"
    //                       onClick={() => deleteThisProduct(item._id)}
    //                     >
    //                       Delete
    //                     </button>
    //                   </td>
    //                 </tr>
    //               );
    //             })}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </Base>
    <AdminBase title="Manage products">
       <div className="container-fluid p-5">
          <div className="d-flex aling-items-center justify-content-between">
            <h2 className="heading mb-0">Product List</h2>
            <button className="btn btn-yellow" data-toggle="modal" data-target="#productModal" onClick={openModal}>Add New Product</button>
          </div>
       </div>


       {/* products modal */}
       <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="productModal">
                  { modalType === 'add' ? "Add New Product" : "Edit Product"}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
               {createForm()}
              </div>
            </div>
          </div>
        </div>
    </AdminBase>
  );
};

export default ManageProducts;
