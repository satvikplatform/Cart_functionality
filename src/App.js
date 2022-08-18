import React from "react";
import { useState } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const[cart, setCart] = useState({
    numberOfItems:0,
    totalPrice:0,
    items:[],
  })

  const liftedClickHandler = (item) => {
    let num = 1;
    let match = false;

    for(let n of cart.items) {
      if(n.id === item.id) {
        match = true;
        let items_copy =[...cart.items];
        let index = items_copy.indexOf(n);
        items_copy[index].numInCart = n.numInCart + 1;
        setCart((prevstate) => {return{numberOfItems:prevstate.numberOfItems + 1, totalPrice: prevstate.totalPrice + item.productPrice, items:[...items_copy]}});
      }
    }
   if(match === false) {
    let copy_of_item = {...item, numInCart: num,}
    setCart((prevstate) => {return{numberOfItems:prevstate.numberOfItems + 1, totalPrice: prevstate.totalPrice + item.productPrice, items:[...prevstate.items, copy_of_item]}});
   }
}

const liftedRemoveHandler = (item) => {
  
}
  
  return (
    <div>
      <Cart  cart={cart}/>
      <hr />
      <Products liftedClickHandler = {liftedClickHandler} liftedRemoveHandler = {liftedRemoveHandler}/>
    </div>
  );
}

export default App;
