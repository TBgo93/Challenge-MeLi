import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Search from '../pages/Search'
import Details from '../pages/Details'
import SearchBar from '../components/SearchBar'



function Router() {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Search />} />
        <Route path="/items/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default Router