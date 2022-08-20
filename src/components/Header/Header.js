import React from 'react';
import logo from '../../assets/images/logo.svg';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo mega" />
            </div>
            <Navigation />
            
        </header>
    );
};

export default Header;