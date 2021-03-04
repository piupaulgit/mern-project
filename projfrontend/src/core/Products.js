import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../admin/helper/adminapicall';
import Base from './Base'
import Card from './Card';
import { getAllProducts } from './helper/coreapicalls';

const Products = () => {
    const [categpries , setCategories] = useState([]);
    const [products, setProducts] = useState([])
    useEffect(() => {
       getCategories().then(res => {
           setCategories(res)
       });
       getAllProducts().then(res => {
           setProducts(res)
       })
    }, [])
    return (
        <div className="products">
            <Base title="Products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="border">
                                <strong className="bg-light p-2 d-block mb-1">Categories</strong>
                                <div>
                                    {categpries && categpries.map((category, index) => {
                                        return (
                                            <Link key={index} to="/" className="category-link">{category.name}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {products && products.map((product, index) => {
                                    return (
                                        <div className="col-md-4" key={index}>
                                            <Card product={product}></Card>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Base>
        </div>
    )
}

export default Products
