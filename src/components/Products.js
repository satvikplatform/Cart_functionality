import React from 'react'
import all_products from "../data/product_info.js";
import Product from './Product.js';

const Products = (props) => {

    const allProductsArr = all_products.map((item) => {return <Product liftedClickHandler = {props.liftedClickHandler} liftedRemoveHandler = {props.liftedRemoveHandler} item={item} key={item.id} />})

  return (
    <div>
        {allProductsArr}
    </div>
  )
}

export default Products