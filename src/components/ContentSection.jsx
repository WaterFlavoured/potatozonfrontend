import React from 'react'
import './ContentSection.css'
import Card from './Card.jsx'

import image from '/src/assets/contentimage.png'
function ContentSection({addToCart}) {
  const handleClick = () => {
    addToCart()
  }
  const rating = 4.5;
  const totalRatings = 100;
  const numbought = 210;
  const title = 'Cobra Wired Gaming Mouse: 58g Lightweight Design - Gen-3 Optical Switches - Chroma RGB Lighting with Underglow - Precise 8500 DPI;'
  const price = 49.99;
  return (
    <div className='conSec'>
      <h1>Results</h1>
      <p>Check each product page for other buying options.</p>
      <div className='cardStorage'>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
        <Card addToCart={addToCart} price={price} totalRatings={totalRatings} rating={rating} numbought={numbought} title={title} link={image}/>
      </div>
    </div>
  )
}

export default ContentSection