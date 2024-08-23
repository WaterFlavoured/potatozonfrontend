import React from 'react'
import './SearchResults.css'
import ContentSection from '/src/components/ContentSection.jsx'
import Sidebar from '/src/components/Sidebar.jsx'
const SearchResults = ({addToCart}) => {
  return (
    <div className='contentbody'>
      <Sidebar />
      <ContentSection addToCart={addToCart}/>
    </div>
  )
}

export default SearchResults