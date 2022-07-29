import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className='headerBackground'>
            </div>
            <div className='navbarContainer'>
                <div className='logoContainer'>
                    <p className='Logo'>Logo</p>
                </div>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;