import React from 'react'

const Cartitems = (props) => {
  return (
    <div>
        <span>{props.item.productName}: </span>
        <span>{props.item.price} :</span>
        <span>{props.item.itemsInCart}</span>
    </div>
  )
}

export default Cartitems