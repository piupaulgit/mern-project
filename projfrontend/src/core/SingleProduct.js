import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from './Base'
import { getSingleProduct } from './helper/coreapicalls';
import ImageHelper from './helper/ImageHelper';

const SingleProduct = () => {
    const productId = useParams().id;
    const [productDetail, setProductDetail] = useState({})
    useEffect(() => {
        getSingleProduct(productId).then(res => {
            setProductDetail(res)
        })
    }, [])
    return (
        <div className="single-product">
            <Base title={productDetail.name}>
                <div className="container">
                    <div className="row">
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
                            <div className="mt-4">
                                <button className="btn btn-yellow mr-3">Add to Card</button>
                                <button className="btn btn-danger">Add to widhlist</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="border">
                                <strong className="bg-light p-2 d-block">Propular Products</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </Base>
        </div>
    )
}

export default SingleProduct
