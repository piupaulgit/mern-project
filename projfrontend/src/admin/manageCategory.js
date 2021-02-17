import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { deleteCategory, getCategories, updateCategory } from "./helper/adminapicall";
import { addCategory } from "./helper/adminapicall";
import AdminBase from "../core/AdminBase";

const ManageCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [categories, setCategories] = useState([]);
  const { user, token } = isAuthenticated();
  const [modalType, setModalType] = useState("")
  const [currentCategory, setCurrentCategory] = useState({})

  useEffect(() => {
    preLoad();
  }, []);

  const handleChange = (event) => {
    setCategoryName(event.target.value);
    setSuccess('');
    setErr('')
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if(modalType === 'add'){
      addCategory(user._id, token, { name: categoryName })
      .then((data) => {
        if (data.error) {
          setErr(data.error);
          setSuccess("");
        } else {
          setSuccess("category successfully added");
          preLoad()
          setErr("");
          setCategoryName("");
        }
      })
      .catch((err) => {
        setErr("Somthing went wrong here.");
      });
    }
    else if(modalType === 'edit'){
      updateCategory(currentCategory._id, categoryName, user._id,token)
      .then((data) => {
        if (data.error) {
          setErr(data.error);
          setSuccess("");
        }
        else{
          setSuccess("category successfully added");
          preLoad()
          setErr("");
        }
      }).catch(err => {
        setErr("Somthing went wrong");
      })
    }
  };
  const addCategoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="For ex. Summer"
            name="categoryName"
            value={categoryName}
            required
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-dark mb-4" onClick={onSubmit} id="addEditBtn">
        { modalType === 'add' ? "Add" : "Update"}
        </button>
      </form>
    );
  };
  const successMsg = () => {
    if (success) {
      return (
        <div className="alert alert-success">{success}</div>
      );
    }
  };
  const errorMsg = () => {
    if (err) {
      return <div className="alert alert-danger">{err}</div> ;
    }
  };
  const preLoad = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  const openModal = () => {
    setModalType("add")
    setSuccess("")
    setErr("")
    setCategoryName("")
  }

  const openEditCategoryModal = (category) => {
    setSuccess("")
    setErr("")
    setModalType("edit")
    setCurrentCategory(category)
    setCategoryName(category.name)
  }

  const openDeleteModal = (category) => {
    setCurrentCategory(category)
    setSuccess("")
    setErr("")
  }

    const deleteThisCategory = () => {
      deleteCategory(currentCategory._id,user._id, token).then(data => {
        if(data.error){
          setErr(data.error);
          setSuccess("");
        }
        else{
          setSuccess("Category Successfully deleted")
          setErr("")
          preLoad()
          setTimeout(() => {
            document.getElementById('closeDeleteModal').click()
          },200)
        }
      }).catch(err => {
        setErr("Something went wrong");
      })
    };
  return (
    <AdminBase title="Manage Category">
      <div className="container-fluid p-5">
        <div className="d-flex aling-items-center justify-content-between">
          <h2 className="heading mb-0">Category List</h2>
          <button className="btn btn-yellow" data-toggle="modal" data-target="#addCategory" onClick={openModal}>Add New Category</button>
        </div>
        <div className="scrallable-div mt-4">
          <table className="table border">
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
                          <button  data-toggle="modal" data-target="#addCategory" onClick={() => openEditCategoryModal(item)}
                            className="btn btn-success mr-2 btn-sm"
                          >
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                              </svg>
                            </span>
                            Edit
                          </button>
                          <button
                            data-toggle="modal" data-target="#deleteCategory"
                            className="btn btn-danger btn-sm"
                            onClick={() => openDeleteModal(item)}
                          >
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
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
        {/* <!-- Modal --> */}
        <div class="modal fade" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="addCategoryLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addCategoryLabel">
                  { modalType === 'add' ? "Add New Category" : "Edit Category"}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {successMsg()}
                {errorMsg()}
                {addCategoryForm()}
              </div>
            </div>
          </div>
        </div>
        {/* delete pop up */}
        <div class="modal fade" id="deleteCategory" tabindex="-1" role="dialog" aria-labelledby="deleteCategoryLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                {successMsg()}
                {errorMsg()}
                <p>Do you really want to delete <b> {currentCategory.name} ? </b></p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-sm mr-2" data-dismiss="modal" aria-label="Close" id="closeDeleteModal">Cancel</button>
                  <button className="btn btn-danger btn-sm" onClick={deleteThisCategory}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminBase>
  );
};

export default ManageCategory;
