import React from 'react'
import './Card.css'

function Card({addToCart, price, rating, numbought, title, totalRatings, link}) {
  // Temp data
  // const price = {price};
  // const rating = 4.5;
  // const totalRatings = 100;
  // const numbought = 210;
  // const title = 'Cobra Wired Gaming Mouse: 58g Lightweight Design - Gen-3 Optical Switches - Chroma RGB Lighting with Underglow - Precise 8500 DPI'
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
      {title.length < 150 ? <h3>{title}</h3> : <h3>{title.slice(0, 150)}...</h3>}
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