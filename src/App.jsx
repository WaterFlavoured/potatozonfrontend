import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Navbar from './components/Navbar.jsx'
import SearchResults from './pages/SearchResults.jsx'
import Account from './pages/Account.jsx'
import Cart from './pages/Cart.jsx'

import './App.css'

const url = 'http://localhost:8080/api/v1/get-all-products'
function App() {
  const [cartCount, setCartCount] = useState(0);
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);

    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  const addToCart = () => {
    setCartCount((prevCount)=>prevCount+1)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={cartCount}/>
        <Routes>
          <Route path='/' element={<SearchResults addToCart={addToCart} product={product}/>} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App