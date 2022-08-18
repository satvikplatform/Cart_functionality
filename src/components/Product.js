import React from 'react'

const Product = (props) => {
    const clickHandler = (item) => {
        props.liftedClickHandler(item);
    }

    const removeHandler = (item) => {
      props.liftedRemoveHandler(item);
    }
  return (
    <div>
        <h3>{props.item.productName}</h3>
        <h3>{props.item.productCategory}</h3>
        <h3>{props.item.productPrice}</h3>
        <button onClick={() => {clickHandler(props.item)}}>Add to cart</button>
        <br />
        <br />
        <button onClick={() => {removeHandler(props.item)}}>Remove from cart</button>
        <hr />
    </div>
  )
}

export default Product