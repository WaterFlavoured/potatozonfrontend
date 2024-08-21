import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ContentSection from './components/ContentSection.jsx'
import Sidebar from './components/Sidebar.jsx'
function App() {

  return (
    <>
      <Navbar />
      <div className='contentbody'>
        <Sidebar />
        <ContentSection />
      </div>
    </>
  )
}

export default App
