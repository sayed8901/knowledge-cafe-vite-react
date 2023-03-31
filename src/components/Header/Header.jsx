import React from 'react';
import './Header.css';
import logo from '../../assets/photo.avif';

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Hub</h2>
            <div className='links'>
                <div>
                    <a href="/home">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Log in</a>
                </div>
                <img src={logo} alt="" />
            </div>
        </nav>
    );
};

export default Header;