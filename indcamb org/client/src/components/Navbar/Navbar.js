import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="new-navbar">
            <div className="new-navbar-brand">SRDS</div>
            <div className="new-navbar-links">
                <button className="new-btn">Donate Now</button>
                <button className="takeaction">Take Action</button>
                <button className="menu ">Menu</button>
            </div>
        </nav>
    );
};

export default Navbar;
