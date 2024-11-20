import React, {useState} from 'react';

import { GoHome } from "react-icons/go";


import './Navbar.css';

const Navbar = () => {

     const [user, setUser] = useState(""); 

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-itme"><a href="/home"><GoHome /> خانه</a></li>
                <li className="nav-itme"><a href="#services">خدمات</a></li>
                <li className="nav-itme"><a href="#contact">ارتباط</a></li>
                <li className="nav-itme"><a href="#about">درباره</a></li>
            </ul>

            <div className="navbar-left">
                {console.log("hello -> "+ user)}
                {user ? <span className="username">{user}</span> :
                            
                            <a href="./login" className="login-button">ورود | ثبت نام</a>
                        
                }
            </div>
            
        </nav>
    );
};

export default Navbar;
