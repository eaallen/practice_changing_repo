import React from 'react'
import ProductCreateFrom from './ProductCreateFrom'

export default function AdminProduct(props){
    return(
        <div>
            <div>
                <h3>Create Product</h3>
                <ProductCreateFrom/>
            </div>
            <div>
                <h3>table for Read, Update, Delete</h3>
            </div>
        </div>
    )
}