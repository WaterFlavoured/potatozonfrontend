import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card'>
      <img src='https://via.placeholder.com/150' alt="" />
      <h3>Product Name</h3>
      <p>Product Description</p>
      <p>$9.99</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default Card