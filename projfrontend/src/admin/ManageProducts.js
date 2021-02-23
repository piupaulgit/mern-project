import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getProducts, deleteProduct, getCategories, addProduct } from "./helper/adminapicall";
import AdminBase from "../core/AdminBase";
import { API } from "../backend";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [modalType, setModalType] = useState('add')
  const { user, token } = isAuthenticated();
  const [currentProduct, setCurrentProduct] = useState({})
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
    success: "",
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
    success,
    createdProduct,
    getaRedirect,
    formData,
  } = formValues;

  useEffect(() => {
    preLoad();
  }, []);

  const showSuccess = () => {
    if(success){
      return (
        <div className="alert alert-success">{success}</div>
      );
    }
  }  
  
  const showError = () => {
    if(error){
      return (
        <div className="alert alert-danger">{error}</div>
      );
    }

  }
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

  const openModal = (modalType,product) => {
    setModalType(modalType)
    if(modalType === 'edit'){
      setCurrentProduct(product)
      setFormValues({...formValues, 
        name:product.name,
        description:product.description,
        price: product.price,
        stock: product.stock
      })
    }
    else if(modalType === 'add'){
      // setFormValues({
      //   name: "",
      //   description: "",
      //   price: "",
      //   stock: "",
      //   photo: "",
      //   categories: [categories],
      //   category: '',
      //   loading: false,
      //   error: "",
      //   success: "",
      //   createdProduct: "",
      //   getaRedirect: false,
      //   formData: new FormData(),
      // })
    }
  }

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setFormValues({ ...formValues, [name]: value, error: '', success: '' });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, error: "", loading: true });
    addProduct(user._id, token, formData)
      .then((data) => {
        if (data.error) {
          setFormValues({ ...formValues, error: data.error });
        } else {
          setFormValues({
            ...formValues,
            name: "",
            description: "",
            price: "",
            photo: "",
            stock: "",
            error: '',
            success: `${data.name} successfully added`,
            loading: false,
            createdProduct: data.name,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openDeleteModal = (product) => {
    setCurrentProduct(product)
    setFormValues({...formValues, error: '', success: ''})
  }

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
        {modalType === 'add' && (
          <div className="form-group">
            <input 
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image"
              className="form-control"
              placeholder="choose a file"></input>
          </div>
        )}
        { modalType === 'edit' && (
          <div className="form-group product-image-holder">
            <img src={`${API}/product/photo/${currentProduct._id}`} className="product-img"></img>
            <button className="btn btn-primary upload-btn btn-small">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                </svg>
              </span>
              Change Image
            </button>
            <input type="file" placeholder="change Image"></input>
          </div>
        )}
        <div className="form-group">
          <select className="form-control"  value={currentProduct.category}
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
        <button className="btn btn-dark text-capitalize" onClick={onSubmit}>
          {modalType}
        </button>
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
            <button className="btn btn-yellow" data-toggle="modal" data-target="#productModal" onClick={() => openModal('add')}>Add New Product</button>
          </div>
          <div className="scrallable-div mt-4">
            <table className="table border">
              <thead className="bg-light">
                <tr >
                  <th className="font-weight-light">Product Name</th>
                  <th className="font-weight-light">Price</th>
                  <th className="font-weight-light">In Stock</th>
                  <th className="font-weight-light">Sold</th>
                  <th className="font-weight-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product,index) => {
                  return (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>₹ {product.price}</td>
                      <td>{product.stock}</td>
                      <td>{product.sold}</td>
                      <td>
                        <button className="btn btn-sm mr-2 btn-success" onClick={() => openModal('edit',product)} data-toggle="modal" data-target="#productModal" >
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                            </span>Edit
                        </button>
                        <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#deleteProduct" onClick={() => openDeleteModal(product)}>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>
                            </span>Delete
                        </button>
                      </td>
                    </tr>
                  )
                })

                }
              </tbody>
            </table>
          </div>
       </div>


       {/* products modal */}
       <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="productModal" className="text-capitalize">
                  { modalType } Product
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {showSuccess()}
                {showError()}
               {createForm()}
              </div>
            </div>
          </div>
        </div>
         {/* delete pop up */}
         <div class="modal fade" id="deleteProduct" tabindex="-1" role="dialog" aria-labelledby="deleteProductLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                {/* {successMsg()}
                {errorMsg()} */}
                <p>Do you really want to delete </p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm mr-2" data-dismiss="modal" aria-label="Close" id="closeDeleteModal">Cancel</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </AdminBase>
  );
};

export default ManageProducts;
