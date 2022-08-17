import React from 'react'

const Cart = (props) => {
  return (
    <div style={{backgroundColor:"tomato"}}>
      <h3>Cart</h3>
      <h4>Total Items:{props.cart.items}</h4>
      <h4>Total Amount:{props.cart.totalAmount}</h4>
    </div>
  )
}

export default Cart;