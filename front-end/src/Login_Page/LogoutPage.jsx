import React from 'react'
import HomePage from '../HomePage/homepage';
import '../Login_Page/logoutStyle.css'
export default function LogoutPage() {

    const handelChange = ()=>{
        localStorage.setItem('user', null);
        localStorage.setItem('login', false);
        { window.location.href = '/home'}

    }

    const handleBack = ()=>{
      { window.location.href = '/home'}
    }
  return (
    <>
       <div className='logout-conter'>
          <div className='text-show-logout'>
            <h2>می خواهید از برنامه خارجی شوید؟</h2>
          </div>
          <div className='button-logout'>
            <div className='logout-bu'>
              <button onClick={handelChange}>بله</button>
            </div>
            <div className='logout-bu'>
              <button onClick={handleBack}>خیر</button>
            </div>
          </div>
       </div>
        
    
    </>
  )
}
