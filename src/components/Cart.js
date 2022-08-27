import React from 'react'
import Cartitems from './Cartitems'

const Cart = (props) => { 
    const inCart  = props.cart.items.map((indiv) => {return <Cartitems item={indiv} key={indiv.id} />})
  return (
    <div style={{backgroundColor: props.cart.totalItemsInCart > 0? "lightgreen" : "tomato"}}>
        <h1>Cart</h1>
        <h2>Total Items In Cart:{props.cart.totalItemsInCart}</h2>
        <h2>Total Cart Price:{props.cart.totalCartPrice}</h2>
        {inCart}
    </div>
  )
}

export default Cart