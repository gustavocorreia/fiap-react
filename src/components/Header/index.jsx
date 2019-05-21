import React from 'react'

import logo from '../../assets/logo.png';
import './style.css'

const Header = () => (
    <header className="header">
        <div className="mdl-grid">
            <div className="mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-phone">
                <img alt="Logo" src={ logo } className="header__logo"/>
            </div>
        </div>
        
    </header>
);

export default Header;