import React from 'react';
import Cartitem from "./Cartitem.js";

const Cart = (props) => {

  let itemDisplay = props.cart.items.map((value) => {return <Cartitem value={value} key={value.id}/>})

  return (
    <div style={{backgroundColor:props.cart.numberOfItems > 0? "lightgreen" : "tomato"}}>
        <h2 >Cart</h2>
        <h4>Number of items:{props.cart.numberOfItems}</h4>
        <h4>Total price:{props.cart.totalPrice}</h4>
        {itemDisplay}
    </div>
  )
}

export default Cart