import React, {useState} from 'react'
import './SearchBar.css'
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const datas = [
    {"full_name": "fwioej 1"},
    {"full_name": "jgeo 2"},
    {"full_name": "ksdmdf"},
    {"full_name": "fmnwl"},
    {"full_name": "djgjlkdj"},
    {"full_name": "sdkfe"},
    {"full_name": "gleol"},
    {"full_name": "skdfm"},
    {"full_name": "gwklm"},
    {"full_name": "akemr"},
    {"full_name": "wmfel"},
    {"full_name": "aimf"},
    {"full_name": "gmkel"},
    {"full_name": "fwjn"},
    {"full_name": "eklg"},
    {"full_name": "elkgn"},
    {"full_name": "wemjf"},
    
    
  ];
  const [value, setValue] = useState('');

  const handleValue = (e)=>{
    setValue(e.target.value);
  }

  const onSearch = (SearchItem)=>{
    console.log('search: -> ', SearchItem);
    datas.map((item)=>{
      console.log(item.full_name);
    })
  }

  return (
    <div>
      
    <div className='boxSearch'>
        <div className='searchBar' >
            <button 
              className='label'
              onClick={()=>onSearch(value)}
            >جستجو</button>
            
            <div className='search' >
                <input 
                  type='text'
                  value={value}
                  onChange={handleValue}
                  placeholder='متخصص، دکتر...'  
                ></input>
            </div>
            <IoSearch className='icon-search' />
        </div>
    </div>

    <div className='dropdown'>
         <h1>helllo</h1>
            {/* {datas.map((item) => <p>{item.full_name}</p>)} */}
        </div>
    </div>
  )
}
