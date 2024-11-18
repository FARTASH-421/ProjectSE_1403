import React from 'react'
import Navbar from './Navbar'
import SearchBar from "./SearchBar"
export default function HomePage({user}) {

    

  return (
    <div>
        <Navbar user={user}/>
        <SearchBar/>

    </div>
  )
}
