import React from 'react'

const Product = (props) => {
    const addHandler = () => {

    }
    const removeHandler = () => {
        
    }
    return (
        <div>
            <h2>Name:{props.item.productName}</h2>
            <h3>Id:{props.item.id}</h3>
            <h3>Price:{props.item.price}</h3>
            <h3>Category:{props.item.category}</h3>
            <button onClick={addHandler}>Add to cart</button>
            <button onClick={removeHandler}>Remove from cart</button>
            <hr />
        </div>
    )
}

export default Product