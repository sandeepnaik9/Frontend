import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logo.png'
import ProfileModal from './ProfileModal';
import { useState } from 'react';

function Navbar() {
  const path = useLocation().pathname;
  const [navStyle,setNavstyle] = useState();
  const [classN,setClassN] = useState();
  useEffect(()=>{
    console.log(path)
    if(path==="/"){
      setClassN("home")
      setNavstyle({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '0',
        left: '0',
        color: 'white',
        right: '0',
        zIndex: '2',
      })
    }
    else{
      console.log("NO HOME")
      setClassN("nohome")
      setNavstyle({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        position:'relative',
        overflow:'hidden',
        color:'black',
        background:'linear-gradient(360deg, #FFFFFF 0%, #76ADFF 99.97%, rgba(191, 218, 247, 0) 99.98%)'})
    }
  },[path])

  const [show, setShow] = useState(false);
  return (
    <nav style={navStyle}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>HYEV</h1>
      </div>
      {/* <button className="menu-toggle" aria-label="Toggle Menu">
        <FontAwesomeIcon icon={faBars} />
      </button> */}
      <ul className={`menu ${classN}`}>
        <li><Link to="/" className={path==="/"?'active':''}>Home</Link></li>
        <li><Link to="/events" className={path==="/events"?'active1':''}>Events</Link></li>
        <li><Link to="/about" className={path==="/about"?'active1':''}>About</Link></li>
        <li><Link to="/contact" className={path==="/contact"?'active1':''}>Contact</Link></li>
      </ul>
      <div className={`right-icons ${classN}`}>
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
