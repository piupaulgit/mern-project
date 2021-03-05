import React from 'react'
import { Link } from 'react-router-dom'

const CategoryWidget = ({categories}) => {
    return (
        <div className="category-widget border mb-4">
            <strong className="bg-light p-2 d-block mb-1">Categories</strong>
            <div>
                {categories && categories.map((category, index) => {
                    return (
                        <Link key={index} to={`/category/${category.name}`} className="category-link">{category.name}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryWidget
