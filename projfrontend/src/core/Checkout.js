import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Checkout.scss";
const Checkout = () => {
    return (
        <div className="checkout">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 user-info">
                        <div className="user-info-holder">
                            <h2 className="font-weight-light">Complete your order detail</h2>
                            <div>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-white p-0">
                                        <li class="breadcrumb-item">
                                           <Link to="/cart">Cart</Link>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <span>Information</span>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <span>Shipping</span>
                                        </li>
                                        <li class="breadcrumb-item">
                                            <span>Payment</span>
                                        </li>
                                    </ol>
                                </nav>
                                <div className="mt-5">
                                    <div className="">
                                        <h6 className="font-weight-light">Contact information</h6>
                                        <div className="form-group mb-4">
                                            <input type="tell" className="form-control rounded rounded" placeholder="Mobile Number"/>
                                            <label>
                                                <input type="checkbox" className="mr-2"></input>
                                                <small>Keep me up to date on news and exclusive offers</small>
                                            </label>
                                        </div>
                                        <h6 className="font-weight-light">Shipping address</h6>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="First Name" className="form-control rounded"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Last Name" className="form-control rounded"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control rounded" placeholder="Address"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control rounded" placeholder="Apartment,Suit, etc (optional)"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control rounded">
                                                        <option>State</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control rounded">
                                                        <option>City</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="text" placeholder="ZIP" className="form-control rounded"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-6  mt-3">
                                                <Link to="/cart"><small className="text-capitalize">Return to cart</small></Link>
                                            </div>
                                            <div className="col-md-6 text-right mt-3">
                                                <button className="btn btn-dark">Continue to Shipping</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* information end */}
                                    <div>
                                        <div className="border p-3 rounded mt-5 mb-4">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Contact</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>+91 89898 98989</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link>Change</Link></small>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Shipping</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>N.C ROAD, SUBHASNAGAR SOUTH, PANIHATI, NTH 24PGS, 700111 GHOLA WB, India</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link>Change</Link></small>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="font-weight-light">Shipping method</h6>
                                        <div className="border py-3 px-4 rounded">
                                            <label className="d-flex justify-content-between mb-0">
                                                <small>
                                                    <input type="radio" checked className="mr-2"></input>Standard Shipping
                                                </small>
                                                <small><b>Rs. 10.00</b></small>
                                            </label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6  mt-3">
                                                <Link to="/cart"><small className="text-capitalize">Return to information</small></Link>
                                            </div>
                                            <div className="col-md-6 text-right mt-3">
                                                <button className="btn btn-dark">Continue to Payment</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* shipping end */}
                                    <div>
                                    <div className="border p-3 rounded mt-5 mb-4">
                                        <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Contact</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>+91 89898 98989</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link>Change</Link></small>
                                                </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Shipping</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>N.C ROAD, SUBHASNAGAR SOUTH, PANIHATI, NTH 24PGS, 700111 GHOLA WB, India</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link>Change</Link></small>
                                                </div>
                                            </div>
                                        <hr></hr>
                                        <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Method</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>Standard Shipping:  <b>$10.00</b></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="font-weight-light">Payment</h6>
                                        <small>All transactions are secure and encrypted.</small>
                                        <div className="alert alert-warning mt-4">
                                            <small>This store can't accept real orders or real payments.</small>
                                        </div>
                                        <div className="border rounded mt-4 p-3">
                                            <small><b>Cash on Delivery (COD)</b></small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6  mt-3">
                                            <Link to="/cart"><small className="text-capitalize">Return to Shipping</small></Link>
                                        </div>
                                        <div className="col-md-6 text-right mt-3">
                                            <button className="btn btn-dark">Complete Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 cart-info ">
                        <div className="cart-info-holder">
werereq
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
