import React from 'react'
import AdminBase from '../core/AdminBase'

const ManageOrders = () => {
    return (
        <AdminBase title="Manage Orders">
              <div className="container-fluid p-5">
                <div className="d-flex aling-items-center justify-content-between">
                    <h2 className="heading mb-0">All Orders</h2>
                </div>
              </div>
        </AdminBase>
    )
}

export default ManageOrders
