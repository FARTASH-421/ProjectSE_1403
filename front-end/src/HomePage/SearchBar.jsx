import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className='boxSearch'>
        <div className='searchBar' >
            <div className='label'>جستجو</div>
            <div className='search' >
                <input placeholder='متخصص، دکتر...'></input>
            </div>
        </div>
    </div>
  )
}
