import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import AdminBase from '../core/AdminBase'
import {getAllOrders} from './helper/adminapicall'

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const { user, token } = isAuthenticated();
    const getOrders = () => {
        getAllOrders(user._id, token).then(data => {
            setOrders(data)
        })
    }
    useEffect(() => {
        getOrders()
    }, [])
    return (
        <AdminBase title="Manage Orders">
              <div className="container-fluid p-5">
                <div className="d-flex aling-items-center justify-content-between">
                    <h2 className="heading mb-0">All Orders</h2>
                </div>
                {orders.length > 0 && 
                    <div className="scrallable-div mt-4">
                        <table className="table border">
                            <thead className="bg-light">
                                <tr >
                                    <th className="font-weight-light">Serial Number</th>
                                    <th className="font-weight-light">Order Id</th>
                                    <th className="font-weight-light">Total Price</th>
                                    <th className="font-weight-light">Status</th>
                                    <th className="font-weight-light">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {orders.map((odr,index) => {
                                return (
                                        <tr key={odr._id}>
                                            <td>{index}</td>
                                            <td>{odr._id}</td>
                                            <td>{odr.amount}</td>
                                            <td>{odr.status}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm mr-2">View Detail</button>
                                                <button className="btn btn-primary btn-sm">Change Status</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                }
                {
                    orders.length === 0 && (
                    <div className="alert alert-danger mt-3">
                        No Orders Found in DB.
                    </div>
                    )
                }
              </div>
        </AdminBase>
    )
}

export default ManageOrders
