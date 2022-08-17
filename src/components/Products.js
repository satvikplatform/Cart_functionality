import React from "react";
import all_products from "../data/product_info";
import { Product } from "./Product";


const Products = (props) => {
 
   
    const allProductsArr = all_products.map((item) => {return <Product item={item} key={item.id} addclickHandler = {props.addclickHandler} />});
   
    return(
        <div>
            {allProductsArr}
        </div>
    );
};

export {Products};