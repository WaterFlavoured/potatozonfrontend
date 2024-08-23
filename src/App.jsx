import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from './components/Navbar.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Account from './pages/Account.jsx'
import Cart from './pages/Cart.jsx'

import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = () => {
    setCartCount((cart)=>cart+1)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cart={0}/>
        <Routes>
          <Route path='/' element={<SearchResults addToCart={addToCart}/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App