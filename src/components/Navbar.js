import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logo.png'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>HYEV</h1>
      </div>
      <button className="menu-toggle" aria-label="Toggle Menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="right-icons">
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
