import React from 'react'
import './Navbar.css'
import logo from '/image.png'
function Navbar({cart}) {
  return (
    <nav>
      <div className='logoAndImageCom'>
        <img src={logo} alt="" />
        <h1 className='logotitle'>POTATOZON</h1>
      </div>
      <form className='searchbar'>
        <input type="text" className='bar' placeholder='Search Potatozon.ca'/>
        <button type='submit' className='subButton'>Search</button>
      </form>
      <ul>
        <li>Cart ({cart})</li>
        <li>Account</li>
      </ul>
    </nav>
  )
}

export default Navbar