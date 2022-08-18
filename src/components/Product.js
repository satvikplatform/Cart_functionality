import React from 'react'

const Product = (props) => {
    const clickHandler = (item) => {
        props.liftedClickHandler(item)
    }
  return (
    <div>
        <h3>{props.item.productName}</h3>
        <h3>{props.item.productCategory}</h3>
        <h3>{props.item.productPrice}</h3>
        <button onClick={() => {clickHandler(props.item)}}>Add to cart</button>
        <hr />
    </div>
  )
}

export default Product