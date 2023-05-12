import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logo.png'
import ProfileModal from './ProfileModal';
import { useState } from 'react';

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>HYEV</h1>
      </div>
      {/* <button className="menu-toggle" aria-label="Toggle Menu">
        <FontAwesomeIcon icon={faBars} />
      </button> */}
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
        <Link onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <ProfileModal onClose={() => setShow(false)} show={show} />

      </div>
    </nav>
  );
}

export default Navbar;
