import React from 'react'
import { useState } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'


const App = () => {
  const [cart, setCart] = useState({
      totalItemsInCart : 0,
      totalCartPrice:0,
      items:[],
  })

  const liftedAddHandler = (item) => {
    let num = 1;
    let match = false;

    for(let i of cart.items) {
      if(i.id === item.id) {
        match = true;
        let items_copy = [...cart.items];
        let index =  items_copy.indexOf(i);
        items_copy[index].itemsInCart =  items_copy[index].itemsInCart + 1;
        setCart((prevState) => {return{ totalItemsInCart:prevState.totalItemsInCart + 1, totalCartPrice:prevState.totalCartPrice + item.price, items:[...items_copy]}});
        break;
      }
    }

    if(match === false) {
    let copy_item = {...item, itemsInCart:num, }
    setCart((prevState) => {return{ totalItemsInCart:prevState.totalItemsInCart + 1, totalCartPrice:prevState.totalCartPrice + item.price, items:[...prevState.items,copy_item]}});
    }
  }

  const liftedRemoveHandler = (item) => {
    for(let i of cart.items) {
      if(i.id === item.id) {
        let num = i.itemsInCart;
        let price = i.price;
        let totalPrice = num*price;
        let items_copy = [...cart.items];
        let index = items_copy.indexOf(i);
        items_copy[index].itemsInCart =   items_copy[index].itemsInCart - 1;
        if(items_copy[index].itemsInCart === 0) {
          items_copy.splice(index,1);
        }
        setCart((prevState) => {return {totalItemsInCart:prevState.totalItemsInCart - 1, totalCartPrice:prevState.totalCartPrice - price, items:[...items_copy]}});
        break;
      }
    }
  }
  return (
    <div>
      <Cart cart={cart} />
      <hr />
      <Products liftedAddHandler={liftedAddHandler} liftedRemoveHandler={liftedRemoveHandler} />
    </div>
  )
}

export default App
