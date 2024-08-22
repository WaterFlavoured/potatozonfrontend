import React from 'react'
import './ContentSection.css'
import Card from './Card.jsx'
function ContentSection({addToCart}) {
  const handleClick = () => {
    addToCart()
  }

  const price = 49.99;
  return (
    <div className='conSec'>
      <h1>Results</h1>
      <div className='cardStorage'>
        <Card addToCart={addToCart} price={price}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
        <Card addToCart={addToCart}/>
      </div>
    </div>
  )
}

export default ContentSection