import React from 'react'
import { Link } from 'react-router-dom';
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
                
                <div>
                    <Link to="/" className="btn btn-yellow btn-large">Go To Main Site</Link>
                </div>
            </div>
        </AdminBase>
    )
}

export default AdminDashboard
