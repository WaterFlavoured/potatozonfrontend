import React from 'react'
import './Card.css'
function Card({addToCart}) {
  // Temp data
  const rating = 4.5;
  const totalRatings = 100;
  const handleClick = () => {
    addToCart()
  }

  const stars = (rating) => {
    if (rating < 1) {
      return <div>☆☆☆☆☆</div>
    } else if (rating >= 1 && rating < 2) {
      return <div>★☆☆☆☆</div>
    } else if (rating >= 2 && rating < 3) {  
      return <div>★★☆☆☆</div>
    } else if (rating >= 3 && rating < 4) {
      return <div>★★★☆☆</div>
    } else if (rating >= 4 && rating < 5) {
      return <div>★★★★☆</div>
    } else if (rating === 5) {
      return <div>★★★★★</div>
    }
  }

  return (
    <div className='card'>
      <img src='https://via.placeholder.com/300' alt="" />
      <h3>Product Name</h3>
      <div className='rating'>
        {stars(rating)}
        <p>{totalRatings}</p>  
      </div>
      <p>bought</p>
      <h2>$9.99</h2>
      <p>Free Shipping <b>Sat, Aug 24</b></p>
      <button onClick={handleClick} className='cartBut'>Add to Cart</button>
    </div>
  )
}

export default Card
// Max title of the product should be 130 characters
// Max title of the product on webpage should be 200 characters