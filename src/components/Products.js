import React from 'react'
import amazon_received_products from "../data/amazon_products.js";
import Product from './Product.js';

const Products = (props) => {
    const receivedAmazonProducts = amazon_received_products.map((item) => {return  <Product liftedAddHandler={props.liftedAddHandler} liftedRemoveHandler = {props.liftedRemoveHandler} key={item.id} item={item}/>})
  return (
    <div>
     {receivedAmazonProducts}
    </div>
  )
}

export default Products