import { event } from 'jquery';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import "../styles/Checkout.scss";
import { handleCountChange, loadCart } from './helper/cartHelper';
import ImageHelper from './helper/ImageHelper';
const stateAndCities = [
    {
        "state": "Arunachal Pradesh",
        "cities": ["Tawang","Itanagar","Ziro","Bomdila","Pasighat","Bhalukpong"]
    },{
        "state": "Karnataka",
        "cities": ["Bengaluru","Hubli-Dharwad","Mysuru","Kalaburagi", "Mangaluru","Belagavi","Davanagere"]
    },
    {
        "state":"West Bangal",
        "cities": ["Kolkata","Nadia","Howrah"]
    }
]
const Checkout = () => {
    const [activeNav, setActiveNav] = useState('information')
    const [products, setProducts] = useState([]);
    const [shippingCharge, setShippingCharge] = useState(100)
    const [enteredCouponCode, setEnteredCpouponCode] = useState('')
    const validCoupon= "smile";
    const [couponApplied, setCouponApplied] = useState(false)
    const { user, token } = isAuthenticated();
    const [userInfo, setUserInfo] = useState({
        contactNumber: null,
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        state: '',
        city: '',
        zip: null
    })
    const changeTab = (tabname) => {
        setActiveNav(tabname)
    }
    const getProducts = () => {
        setProducts(loadCart());
      };
    
      useEffect(() => {
        getProducts();
      }, []);

    const handleCouponChange = (e) => {
        setEnteredCpouponCode(e.target.value)
    }
    const handleCouponSubmit  = () => {
        if(enteredCouponCode === validCoupon){
            setCouponApplied(true)
            setShippingCharge(0)
        }
        else{
            setCouponApplied(false)
            setShippingCharge(100)
        }
    }
    const handleChange = (name) => event => {
        setUserInfo({...userInfo,[name]:event.target.value})
    }
    const processed = () => {
        console.log(userInfo)
        changeTab('shipping')
    }
    const placeOrder = () => {
        
    }
    return (
        <div className="checkout">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 user-info">
                        <div className="user-info-holder">
                            <h2 className="font-weight-light">Complete your order detail</h2>
                            <div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-white p-0">
                                        <li className="breadcrumb-item">
                                           <Link to="/cart" className="text-dark">Cart</Link>
                                        </li>
                                        <li className={`breadcrumb-item ${activeNav === 'information' ? 'active' : ''}`} onClick={() => changeTab('information')}>
                                            <span>Information</span>
                                        </li>
                                        <li className={`breadcrumb-item ${activeNav === 'shipping' ? 'active' : ''}`} onClick={() => changeTab('shipping')}>
                                            <span>Shipping</span>
                                        </li>
                                        <li className={`breadcrumb-item ${activeNav === 'payment' ? 'active' : ''}`} onClick={() => changeTab('payment')}>
                                            <span>Payment</span>
                                        </li>
                                    </ol>
                                </nav>
                                <div className="mt-5">
                                    <div className={`tabContent ${activeNav === 'information' ? 'active' : ''}`} >
                                        <h6 className="font-weight-light">Contact information</h6>
                                        <div className="form-group mb-4">
                                            <input type="tell" 
                                            className="form-control rounded rounded" 
                                            value={userInfo.contactNumber}
                                            name="contactNumber"
                                            onChange={handleChange("contactNumber")}
                                            placeholder="Mobile Number" />
                                            <label>
                                                <input type="checkbox" className="mr-2"></input>
                                                <small>Keep me up to date on news and exclusive offers</small>
                                            </label>
                                        </div>
                                        <h6 className="font-weight-light">Shipping Address</h6>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" 
                                                    value={userInfo.firstName}
                                                    name="firstName"
                                                    onChange={handleChange("firstName")}
                                                    placeholder="First Name" className="form-control rounded"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" 
                                                    value={userInfo.lastName}
                                                    name="lastName"
                                                    onChange={handleChange("lastName")}
                                                    placeholder="Last Name" className="form-control rounded"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control rounded"
                                                    value={userInfo.address}
                                                    name="address"
                                                    onChange={handleChange("address")}
                                                     placeholder="Address"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                    value={userInfo.apartment}
                                                    name="apartment"
                                                    onChange={handleChange("apartment")}
                                                     className="form-control rounded" placeholder="Apartment,Suit, etc (optional)"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control rounded"  
                                                    value={userInfo.state}
                                                    name="state"
                                                    onChange={handleChange("state")}>
                                                        <option>Select State</option>
                                                        {
                                                            stateAndCities && stateAndCities.map((state,index) => {
                                                                return (<option key={index}>{state.state}</option>)
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <select className="form-control rounded" 
                                                     value={userInfo.city}
                                                     name="city"
                                                     onChange={handleChange("city")}>
                                                        <option>Select City</option>
                                                        {
                                                           userInfo.state && stateAndCities.filter(item => item.state === userInfo.state)[0].cities.map((city,index) => {
                                                                return( <option key={index}>{city}</option>)
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="text" 
                                                     value={userInfo.zip}
                                                     name="zip"
                                                     onChange={handleChange("zip")}
                                                    placeholder="ZIP" 
                                                    className="form-control rounded"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-6  mt-3">
                                                <Link to="/cart"><small className="text-capitalize">Return to cart</small></Link>
                                            </div>
                                            <div className="col-md-6 text-right mt-3">
                                                <button className="btn btn-dark"  onClick={processed}>Continue to Shipping</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* information end */}
                                    <div className={`tabContent ${activeNav === 'shipping' ? 'active' : ''}`}>
                                        <div className="border p-3 rounded mt-5 mb-4">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Contact</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>{userInfo.contactNumber}</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link  onClick={() => changeTab('information')}>Change</Link></small>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Shipping</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>{userInfo.address}</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link  onClick={() => changeTab('information')}>Change</Link></small>
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
                                                <Link><small className="text-capitalize"  onClick={() => changeTab('information')}>Return to information</small></Link>
                                            </div>
                                            <div className="col-md-6 text-right mt-3">
                                                <button className="btn btn-dark" onClick={() => changeTab('payment')}>Continue to Payment</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* shipping end */}
                                    <div className={`tabContent ${activeNav === 'payment' ? 'active' : ''}`}>
                                    <div className="border p-3 rounded mt-5 mb-4">
                                        <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Contact</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>+91 89898 98989</small>
                                                </div>
                                                <div className="col-md-3">
                                                    <small><Link  onClick={() => changeTab('information')}>Change</Link></small>
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
                                                    <small><Link  onClick={() => changeTab('information')}>Change</Link></small>
                                                </div>
                                            </div>
                                        <hr></hr>
                                        <div className="row">
                                                <div className="col-md-2">
                                                    <small className="text-muted">Method</small>
                                                </div>
                                                <div className="col-md-6">
                                                    <small>Standard Shipping:  <b>Rs: {shippingCharge}</b></small>
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
                                            <Link><small className="text-capitalize"  onClick={() => changeTab('shipping')}>Return to Shipping</small></Link>
                                        </div>
                                        <div className="col-md-6 text-right mt-3">
                                            <button className="btn btn-dark" onClick={placeOrder}>Place Order</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 cart-info ">
                        <div className="cart-info-holder">
                            <div className="items-holder">
                                {
                                    products && products.map((item, index) => {
                                        return (
                                            <div className="each-item d-flex justify-content-between align-items-center border-bottom py-3" key={item._id}>
                                                <div className="d-flex align-items-center">
                                                    <span className="item-image">
                                                        <ImageHelper product={item}></ImageHelper>
                                                        <span>{item.count}</span>
                                                    </span>
                                                    <span className="text-capitalize">{item.name}</span>
                                                </div>
                                                <strong>Rs. {item.totalPrice}</strong>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="coupon-holder row py-4 border-bottom">
                                <div className="col-md-9">
                                    <input type="text" className="form-control rounded coupon-input" value ={enteredCouponCode} placeholder="Coupon" onChange={(e) => handleCouponChange(e)}></input>
                                    {
                                        couponApplied && (
                                            <small className="text-danger smallest-font">Coupon applied. Shipping charge deducted.</small>
                                        )
                                    }
                                    {
                                        !couponApplied && (
                                            <small className="smallest-font">Use your <strong>"smile"</strong> as a coupon code to exclude shipping charge.</small>
                                        )
                                    }
                                </div>
                                <div className="col-md-3">
                                    <button className="btn btn-dark" onClick={handleCouponSubmit}>Apply</button>
                                </div>
                            </div>
                            <div className="py-3 border-bottom">
                                <p className="d-flex justify-content-between mb-0">
                                    <small>Subtotal</small>
                                    <strong><small> Rs. {
                                    products.reduce((total, prod) => total + prod.totalPrice, 0)
                                    }</small></strong>
                                </p>
                                <p className="d-flex justify-content-between mb-0">
                                    <small>Shipping</small>
                                    <strong><small>Rs. {shippingCharge}</small></strong>
                                </p>
                            </div>
                            <h5 className="d-flex justify-content-between mb-0 mt-2"><strong>Total</strong><strong>Rs. {
                                    products.reduce((total, prod) => total + prod.totalPrice, shippingCharge)
                                    }</strong></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
