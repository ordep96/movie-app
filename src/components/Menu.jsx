import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../media/popcorn.svg';
import './styles/header.css';

const Menu = props => (
  <header id="header">
    <div className="menu-bar">
        <div className="logo">
          <Link to="/movie-app/">
            <img src={Logo} alt=""/>
          </Link>
        </div>
        <h2 className="branding">OrdepMovie</h2>
    </div>

    <div className="container">
      <div className="header">
        <nav className="header__nav">
          <div className="logo">
            <Link to="/movie-app/">
              <img src={Logo} alt="logo"/>
            </Link>
            <h2 className="branding">OrdepMovie</h2>
          </div>
        </nav>
      </div>
    </div>
  </header>

)


export default Menu;