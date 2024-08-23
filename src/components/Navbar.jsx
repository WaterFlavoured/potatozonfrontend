import React from 'react'
import './Navbar.css'
import logo from '/image.png'
import { Link } from 'react-router-dom'
function Navbar({cartCount}) {

  return (
    <nav>
      <Link to='/'className='logoAndImageCom'>
        <img src={logo} alt=""/>
        <h1 className='logotitle'>POTATOZON</h1>
      </Link>
      <form className='searchbar'>
        <input type="text" className='bar' placeholder='Search Potatozon.ca'/>
        {/* <Link to='/'>  for now just not have this cuz idk if it's gonna break or not when I search stuff*/}
          <button type='submit' className='subButton'>Search</button>
        {/* </Link> */}
      </form>
      <ul>
        <li><Link to='/cart' className='link'>Cart ({cartCount})</Link></li>
        <li><Link to='/account' className='link'>Account</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar