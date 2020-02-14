import React from 'react';

import logoFacebook from '../assets/facebook-1.png';
import logoUser from '../assets/user.png';

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="menu">
                    <img
                        src={logoFacebook}
                        className='logo'
                        alt="logo facebook" />
                    <a className='profile'>
                        <span>Meu perfil</span>
                        <img src={logoUser} alt="profile" />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;