import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { GoHome } from "react-icons/go";
import './Navbar.css';

const Navbar = () => {
    const user = localStorage.getItem('user');
    const strCh = localStorage.getItem('login');
    let checkLogin = JSON.parse(strCh);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const handleLogout = () => {
        // localStorage.removeItem('user');
        // localStorage.removeItem('login');
        window.location.href = './logout'; // Redirect to login page
        
    };

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item"><a href="/home"><GoHome /> خانه</a></li>
                <li className="nav-item"><a href="#services">خدمات</a></li>
                <li className="nav-item"><a href="#contact">ارتباط</a></li>
                <li className="nav-item"><a href="#about">درباره</a></li>
            </ul>

            <div className="navbar-left">
                {checkLogin ? (
                    <div 
                        className="username-container" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="login-button">{user}</span>
                        {isDropdownOpen && (
                            <div className="dropdown-navbar">
                                <a className="profile"href="/profile">Profile</a>
                                <a className = "logU" onClick={handleLogout}>Logout</a>
                            </div>
                        )}
                    </div>
                ) : (
                    <a href="./login" className="login-button"> <span>ورود | ثبت نام</span></a>
                )}
            </div>
            {/* <ToastContainer /> */}
        </nav>
    );
};

export default Navbar;

