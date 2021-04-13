import React from 'react'
import AdminSidenav from './AdminSidenav';

const AdminBase = ({ title = "page title", children }) => {
    return (
        <div className="admin-base">
            <div className="Admin-screen">
                <AdminSidenav></AdminSidenav>
                <div className="main-content">
                    <div className="admin-header bg-light">
                        <h2>{title}</h2>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminBase;
