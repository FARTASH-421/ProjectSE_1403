import React, { useState } from 'react'
import Navbar from './Navbar'
import SearchBar from "./SearchBar"
import Footer from "./Footer"

export default function HomePage() {

  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <Footer/>

    </div>
  )
}
