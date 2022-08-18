import React from 'react'

const Cartitem = (props) => {
  return (
    <div>
       <span>{props.value.productName}:</span>
       <span>{props.value.productPrice}:</span>
       <span>{props.value.numInCart}</span>
    </div>
  )
}

export default Cartitem