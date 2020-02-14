import React from 'react';

import logoFacebook from '../assets/facebook-1.png';

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="menu">
                    <img
                        src={logoFacebook}
                        className='logo'
                        alt="logo facebook" />
                </nav>
            </div>
        </header>
    );
}

export default Header;