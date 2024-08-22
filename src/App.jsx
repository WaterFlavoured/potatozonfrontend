import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ContentSection from './components/ContentSection.jsx'
import Sidebar from './components/Sidebar.jsx'
function App() {
  const [cart, setCart] = useState(0)

  const addToCart = () => {
    setCart((cart)=>cart+1)
  }

  return (
    <>
      <Navbar cart={cart}/>
      <div className='contentbody'>
        <Sidebar />
        <ContentSection addToCart={addToCart}/>
      </div>
      
    </>
  )
}

export default App
