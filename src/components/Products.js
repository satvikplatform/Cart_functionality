import React from 'react'
import amazon_received_products from "../data/amazon_products.js";
import Product from './Product.js';

const Products = () => {
    const receivedAmazonProducts = amazon_received_products.map((item) => {return  <Product key={item.id} item={item}/>})
  return (
    <div>
     {receivedAmazonProducts}
    </div>
  )
}

export default Products