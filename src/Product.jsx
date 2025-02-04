import React from 'react'

const Product = ({name, price, quantity}) => {
  return (
    <div>
        Product Component
        <p>

        Name: {name}
        </p>
        
        <p>

        Price: {price}
        </p>
        <p>

        Quantity: {quantity}
        </p></div>
  )
}

export default Product