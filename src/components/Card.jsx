import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
function Card({addToCart, price, rating, numbought, title, totalRatings, link}) {
  // Function to add item to cart (a bit temporary for now) i need to add the product to the cart
  const handleClick = () => {
    addToCart()
  }

  // Function to display stars based on rating
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

  // Function to display number of items bought
  const bought = (num) => {
    const asdf = Math.floor(num/100)*100

    if (num < 50) {
      return <span><br /></span>
    } else if (num < 100) {
      return <span>50+ bought</span>
    } else {
      return <span>{asdf}+ bought</span>
    }
  }

  return (
    <div className='card'>
      <img src={link} alt="" />
      {title.length < 150 ? <Link to='/product'>{title}</Link> : <Link to='/product'>{title.slice(0, 150)}...</Link>}
      <div className='rating'>
        {stars(rating)}
        <p>{totalRatings}</p>  
      </div>
      <p className='numBought'>{bought(numbought)}</p>
      <h2>${price}</h2>
      <p>Free Shipping <b>Sat, Aug 24</b></p>
      <button onClick={handleClick} className='cartBut'>Add to Cart</button>
    </div>
  )
}

export default Card
// Max title of the product should be 130 characters
// Max title of the product on webpage should be 200 characters