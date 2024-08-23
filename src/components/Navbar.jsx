import React from 'react'
import './Navbar.css'
import logo from '/image.png'
import { Link } from 'react-router-dom'
function Navbar({cart}) {

  return (
    <nav>
      <Link to='/'className='logoAndImageCom'>
        <img src={logo} alt=""/>
        <h1 className='logotitle'>POTATOZON</h1>
      </Link>
      <form className='searchbar'>
        <input type="text" className='bar' placeholder='Search Potatozon.ca'/>
        <button type='submit' className='subButton'>Search</button>
      </form>
      <ul>
        <li><Link to='/cart' className='link'>Cart ({cart})</Link></li>
        <li><Link to='/account' className='link'>Account</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar