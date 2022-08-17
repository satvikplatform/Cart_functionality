import React from "react";
import { Products } from "./components/Products.js";
import Cart from "./components/Cart.js";
import { useState } from "react";



function App() {
  const[cart,setCart] = useState({
    items:0,
    totalAmount:0,
  })
  const addclickHandler = (productPrice) => {
    setCart((prevState) => {return {items:prevState.items + 1, totalAmount:prevState.totalAmount + productPrice}});
  }
  return (
    <div>
      <Cart cart={cart} />
      <hr/>
      <Products addclickHandler={addclickHandler} />
    </div>
  );
}

export default App;
