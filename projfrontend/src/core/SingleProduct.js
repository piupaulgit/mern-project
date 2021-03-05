import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Base from './Base'
import { getAllProducts, getSingleProduct } from './helper/coreapicalls';
import ImageHelper from './helper/ImageHelper';

const SingleProduct = () => {
    const productId = useParams().id;
    const [productDetail, setProductDetail] = useState({})
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getSingleProduct(productId).then(res => {
            setProductDetail(res)
        })
        loadAllProduct();
    }, [productId])
    
      const loadAllProduct = () => [
        getAllProducts()
          .then((data) => {
            if (data.error) {
              console.log(data.error);
            } else {
              setProducts(data);
              console.log(data);
            }
          })
          .catch((err) => {
            console.log(err);
          }),
      ];
    return (
        <div className="single-product">
            <Base title={productDetail.name}>
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                            <div className="border mb-5">
                                <strong className="bg-light p-2 d-block mb-2">Propular Products</strong>
                                <div>
                                    {
                                        products && products.map((item, index) => {
                                            return (
                                                <Link to={`/product/${item._id}`} className="each-product row py-1 border-bottom m-0 px-1 align-items-center" key={index}>
                                                    <div className="col-md-5 pl-0">
                                                        <ImageHelper product={item}></ImageHelper>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <small className="d-block">{item.name}</small>
                                                        <strong>₹ {item.price}</strong>
                                                    </div>
                                                </Link> 
                                            )
                                        })
                                    }
                                    <Link to="/" className="btn btn-block btn-dark mt-2 rounded-0">View all products</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-image border">
                                <ImageHelper product={productDetail} />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h4>{productDetail.name}</h4>
                            <strong>Price: ₹ {productDetail.price}</strong>
                            <p className="pt-2">{productDetail.description}</p>
                            <strong>Category: Need to work</strong>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group mt-3 mb-0">
                                        <label><small>Quantity</small></label>
                                        <input type="number" className="form-control" value="0"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-yellow mr-3">Add to Card</button>
                                <button className="btn btn-danger">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Base>
        </div>
    )
}

export default SingleProduct
