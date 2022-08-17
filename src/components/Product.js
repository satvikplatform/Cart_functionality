import React from 'react'



const Product = (props) => {
  
  const clickHandler = (productPrice) => {
    props.addclickHandler(productPrice);
  }
  return (
    <div>
        <h4>{props.item.productName}</h4>
        <h4>{props.item.productCategory}</h4>
        <h4>{props.item.productPrice}</h4>
        <button onClick={() => {clickHandler(props.item.productPrice)}}>Add to cart</button>
        <button>Remove from cart</button>
        <hr />
    </div>
  )
}

export  {Product};