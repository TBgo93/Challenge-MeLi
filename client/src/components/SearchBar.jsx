import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../styles/SearchBar.css'

function SearchBar() {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const keyword_value = e.target[0].value
    navigate(`/items?q=${keyword_value}`)
  }
  
  return (
    <>
      <header className="nav-header">
        <div className="nav">
          <Link to="/" className="nav-logo" />
          <form onSubmit={handleSubmit} className="nav-search">
            <input type="text" name="q" className="nav-search-input" placeholder="Nunca dejes de buscar"/>
            <button className="nav-search-btn"></button>
          </form>
        </div>
      </header>
    </>
  )
}

export default SearchBar