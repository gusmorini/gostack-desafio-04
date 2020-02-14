import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const iconUser = <FontAwesomeIcon icon={faUserCircle} />;


import logoFacebook from '../assets/facebook-1.png';
import logoUser from '../assets/user.png';

function Header() {
    return (
        <header>
            <div className="container">
                <nav className="menu">
                    <a href="#" className="logo">
                        <img
                            src={logoFacebook}
                            alt="logo facebook" />
                    </a>
                    <a className='profile' href="#">
                        Meu perfil
                        <span>{iconUser} </span>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;