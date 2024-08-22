import React from 'react'
import './ContentSection.css'
import Card from './Card.jsx'
function ContentSection() {
  return (
    <div className='conSec'>
      <h1>Results</h1>
      <div className='cardStorage'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default ContentSection