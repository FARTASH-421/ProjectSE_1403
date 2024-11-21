import React, {useState} from 'react';
import { GoHome } from "react-icons/go";
import './Navbar.css';

const Navbar = () => {
   
    const user = localStorage.getItem('user');
    const strCh = localStorage.getItem('login');
    let checkLogin = JSON.parse(strCh);
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-itme"><a href="/home"><GoHome /> خانه</a></li>
                <li className="nav-itme"><a href="#services">خدمات</a></li>
                <li className="nav-itme"><a href="#contact">ارتباط</a></li>
                <li className="nav-itme"><a href="#about">درباره</a></li>
            </ul>

            <div className="navbar-left">            
               { checkLogin? <a href='./logout' className="login-button"><span>{user}</span></a> :
                <a href="./login" className="login-button"> <span>ورود | ثبت نام</span></a>
                }
            </div>
            
        </nav>
    );
};

export default Navbar;
