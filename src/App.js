import React from 'react'
import { useState } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'


const App = () => {
  const [cart, setCart] = useState({
      totalItemsInCart : 0,
      totalCartPrice:0,
  })

  const liftedAddHandler = (item) => {
    setCart((prevState) => {return{ totalItemsInCart:prevState.totalItemsInCart + 1, totalCartPrice:prevState.totalCartPrice + item.price}});
  }
  return (
    <div>
      <Cart cart={cart} />
      <hr />
      <Products liftedAddHandler={liftedAddHandler} />
    </div>
  )
}

export default App
