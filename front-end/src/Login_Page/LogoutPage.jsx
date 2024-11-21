import React from 'react'
import HomePage from '../HomePage/homepage';
import '../Login_Page/logoutStyle.css'
export default function LogoutPage() {

    const handelChange = ()=>{
        localStorage.setItem('user', null);
        localStorage.setItem('login', false);
        { window.location.href = '/home'}

    }
  return (
    <>
        {/* <HomePage/> */}
        <button onClick={handelChange}
           className='logout'
        >log out</button>
    
    </>
  )
}
