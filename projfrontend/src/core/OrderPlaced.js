import React from 'react'
import { Link } from 'react-router-dom'

const OrderPlaced = () => {
    return (
        <div className="order-placed">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center">
                        <h4>Your order has been successfully placed.</h4>
                        <Link to="/" className="btn btn-yellow">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPlaced
