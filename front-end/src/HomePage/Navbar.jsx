import React from 'react';
import './Navbar.css';

const Navbar = ({user}) => {
    
    return (
        <nav className="navbar">
            <div className="navbar-left">
                
                {user ? <span className="username">{user}</span> : 
                        <a href="./login" className="login-button">ورود | ثبت نام</a>}
                
            </div>
            <ul className="nav-links">
            {user}
                <li className="nav-itme"><a href="#about">About</a></li>
                <li className="nav-itme"><a href="#contact">Contact</a></li>
                <li className="nav-itme"><a href="#services">Services</a></li>
                <li className="nav-itme"><a href="#home">خانه</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
