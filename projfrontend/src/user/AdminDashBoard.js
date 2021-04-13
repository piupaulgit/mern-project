import React from 'react'
import { isAuthenticated } from '../auth/helper';
import AdminBase from '../core/AdminBase'
import Base from '../core/Base'

const AdminDashboard = () => {
    const { user, token } = isAuthenticated();
    console.log(user)
    return (
        <AdminBase title="Admin dashboard">
            <div className="container-fluid p-5">
                <div className="">
                    <h2>Welcome {user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </AdminBase>
    )
}

export default AdminDashboard
