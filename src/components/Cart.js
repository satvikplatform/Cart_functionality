import React from 'react'
import Cartitems from './Cartitems'

const Cart = (props) => {
  return (
    <div>
        <h1>Cart</h1>
        <h2>Total Items In Cart:{props.cart.totalItemsInCart}</h2>
        <h2>Total Cart Price:{props.cart.totalCartPrice}</h2>
        <Cartitems />
    </div>
  )
}

export default Cart