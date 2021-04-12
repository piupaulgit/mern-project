import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import AdminBase from '../core/AdminBase'
import {getAllOrders} from './helper/adminapicall'

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const { user, token } = isAuthenticated();
    const [currentOrder, setCurrentOrder] = useState({})
    const getOrders = () => {
        getAllOrders(user._id, token).then(data => {
            setOrders(data)
        })
    }
    useEffect(() => {
        getOrders()
    }, [])

    const openModal = (ordr) => {
        setCurrentOrder(ordr)
        console.log(currentOrder)
    }
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
                                                <button className="btn btn-primary btn-sm mr-2" data-toggle="modal" data-target="#orderDetail" onClick={() => openModal(odr)}>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                                        </svg>
                                                    </span>View Detail
                                                </button>
                                                <button className="btn btn-primary btn-sm">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                        </svg>
                                                    </span>Change Status
                                                </button>
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


                {/* view detail modal */}
                <div className="modal fade" id="orderDetail" tabindex="-1" role="dialog" aria-labelledby="orderDetail" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderDetail" className="text-capitalize">
                                Order Detail
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div className="modal-body">
                                <p className="text-sm mb-0"><strong>Order ID: </strong>{currentOrder._id}</p>
                                <p className="text-sm mb-0"><strong>Order From:  </strong>{currentOrder?.name}</p>
                                <p className="text-sm mb-0"><strong>Email:  </strong>{currentOrder?.user?.name}</p>
                                <p className="text-sm mb-0"><strong>Mobile:  </strong>{currentOrder.mobile}</p>
                                <p className="text-sm"><strong>Address:  </strong>{currentOrder.address}</p>
                                <table className="table border">
                                    <thead>
                                        <tr>
                                            <th className="text-sm">Product Name</th>
                                            <th className="text-sm">Quantity</th>
                                            <th className="text-sm">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        currentOrder?.products?.map((pro,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='text-sm'>{pro.name}</td>
                                                    <td className='text-sm'>{pro.count}</td>
                                                    <td className='text-sm'>{pro.price}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminBase>
    )
}

export default ManageOrders
