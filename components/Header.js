import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className='headerBackground'>
            </div>
            <div className='navbarContainer'>
                <div className='logoContainer'>
                    <img className='logoContainer__img' src=".\img\imgSite\logo webzh white.png" alt="logo webzh" />
                    <p className='logoContainer__text'>Webzh Agence</p>
                </div>
                <Navbar />
            </div>
        </header>
    );
};

export default Header;