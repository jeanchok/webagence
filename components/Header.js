import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className='headerBackground'>

            </div>


            {/* <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div> */}
            <div className='navbarContainer'>
                <div className='logoContainer'>
                    <img className='logoContainer__img' src=".\img\imgSite\logo webzh white.png" alt="logo webzh" />
                    <a href='/' className='logoContainer__text'>Webzh Agence</a>
                </div>
                <Navbar />
            </div>

        </header>
    );
};

export default Header;