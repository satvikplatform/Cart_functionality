import React from 'react'

const Product = (props) => {
    const addHandler = (item) => {
        props.liftedAddHandler(item);
    }
    const removeHandler = (item) => {
        props.liftedRemoveHandler(item);
    }
    return (
        <div>
            <h2>Name:{props.item.productName}</h2>
            <h3>Id:{props.item.id}</h3>
            <h3>Price:{props.item.price}</h3>
            <h3>Category:{props.item.category}</h3>
            <button onClick={() => {addHandler(props.item)}}>Add to cart</button>
            <button onClick={() => {removeHandler(props.item)}}>Remove from cart</button>
            <hr />
        </div>
    )
}

export default Product