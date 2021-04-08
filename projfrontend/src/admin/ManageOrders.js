import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/helper'
import AdminBase from '../core/AdminBase'
import {getAllOrders} from './helper/adminapicall'

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const { user, token } = isAuthenticated();
    const getOrders = () => {
        getAllOrders(user._id, token).then(data => {
            console.log(data,'oopo')
        })
    }
    useEffect(() => {
        getOrders()
    }, [])
    return (
        <AdminBase title="Manage Orders">
              <div className="container-fluid p-5">
                <div className="d-flex aling-items-center justify-content-between">
                    <h2 className="heading mb-0">All Orders</h2>)
                </div>
              </div>
        </AdminBase>
    )
}

export default ManageOrders
