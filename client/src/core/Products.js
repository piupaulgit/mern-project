import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategories } from '../admin/helper/adminapicall';
import Base from './Base'
import Card from './Card';
import CategoryWidget from './components/CategoryWidget';
import { getAllProducts, getProductsByCategory } from './helper/coreapicalls';

const Products = () => {
    const [categories , setCategories] = useState([]);
    const [products, setProducts] = useState([])
    const {categoryName} = useParams();
    useEffect(() => {
       getCategories().then(res => {
           setCategories(res)
           if(categoryName){
                const catId = res.filter(item => item.name === categoryName)
                getProductsByCategory(catId[0]._id).then(res => {
                    setProducts(res)
                })
            }
            else{
                getAllProducts().then(res => {
                    setProducts(res)
                })
            }
       });
      
    }, [categoryName])
    return (
        <div className="products">
            <Base title="Products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <CategoryWidget categories={categories}></CategoryWidget>
                        </div>
                        <div className="col-md-9">
                            {categoryName && <h6 className="mb-3 text-capitalize">Category: {categoryName}</h6>}
                            {
                                products.length === 0 ? 
                                    <div className="alert alert-danger">
                                        No Product found.
                                    </div>
                                    : ''
                            }
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
