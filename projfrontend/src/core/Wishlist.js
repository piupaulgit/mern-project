import React, { useEffect, useState } from 'react'
import { getCategories } from '../admin/helper/adminapicall';
import Base from './Base'
import Card from './Card';
import CategoryWidget from './components/CategoryWidget'
import { loadWishlist } from "./helper/cartHelper";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])
    const [categories , setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(res => {
            setCategories(res)
        })
        setWishlist(loadWishlist());
    }, [])
    return (
        <div className="wishlist">
             <Base title="Wishlist">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-3">
                            <CategoryWidget categories={categories}></CategoryWidget>
                         </div>
                         <div className="col-md-9">
                            <div className="row">
                                {wishlist && wishlist.map((product, index) => {
                                    return (
                                        <div className="col-md-4" key={index}>
                                            <Card product={product} addToWishList={false} removeFromWishList={true}></Card>
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

export default Wishlist
