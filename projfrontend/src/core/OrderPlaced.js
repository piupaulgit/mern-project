import React from 'react'
import { Link, useParams } from 'react-router-dom'

const OrderPlaced = () => {
    const orderId = useParams().id;
    return (
        <div className="order-placed">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mx-auto text-center">
                        <h4 className='display-4'>Your order has been successfully placed.</h4>
                        <p className="mb-5">Order Number: <b>{orderId}</b></p>
                        <Link to="/" className="btn btn-yellow">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderPlaced
