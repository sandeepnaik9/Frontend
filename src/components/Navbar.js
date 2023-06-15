import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faSignOutAlt, faEdit, faCog, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logo.png'
import userImg from '../assets/user.png'
import ProfileModal from './ProfileModal';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logout, reset} from '../reduxFeatures/auth/authSlice'


function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isSuccess} = useSelector(
    (state) => state.auth
  )
  const path = useLocation().pathname;
  const [navStyle, setNavstyle] = useState();
  const [classN, setClassN] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(path)
    if (path === "/" || path === "/about") {
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
    else {
      console.log("NO HOME")
      setClassN("nohome")
      setNavstyle({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        color: 'black',
        background: 'linear-gradient(360deg, #FFFFFF 0%, #76ADFF 99.97%, rgba(191, 218, 247, 0) 99.98%)'
      })
    }
  }, [path])

  const [show, setShow] = useState(false);
useEffect(()=>{
  if(isSuccess){
    setShow(false)
  }
},[isSuccess])
const onLogout = () => {
  dispatch(logout())
  dispatch(reset())
  navigate('/')
}

let profMenu = document.getElementById("profMenu")
const toggleProfMenu = () => {
  profMenu.classList.toggle("open-prof-menu")
}

  return (
    <nav style={navStyle}>
      <div className="logo">
      <Link to='/'>
        <img src={Logo} alt="Logo" />
        </Link>
        <h1>HYEV</h1>
      </div>
      {/* <button className="menu-toggle" aria-label="Toggle Menu">
        <FontAwesomeIcon icon={faBars} />
      </button> */}
      <ul className={`menu ${classN} ${isOpen ? 'active-nav' : ''}`} style={{listStyle: 'none'}}>
        <li><Link to="/" className={path === "/" ? 'active' : ''}>Home</Link></li>
        <li><Link to="/events" className={path === "/events" ? 'active1' : ''}>Events</Link></li>
        <li><Link to="/about" className={path === "/about" ? 'active1' : ''}>About</Link></li>
        <li><Link to="/contact" className={path === "/contact" ? 'active1' : ''}>Contact</Link></li>
      </ul>
      <div className={`right-icons ${classN}`}>
        <button onClick={toggleNav}>
          {isOpen ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
        </button>
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        {
          user ? (<>
            <FontAwesomeIcon icon={faUser} id='prof-menu-btn' onClick={toggleProfMenu} user={user}/>
            <div className='prof-menu-wrap' id='profMenu'>
              <div className='prof-menu'>
                <div className='prof-menu-user-info'>
                  <img src={userImg} alt='user-picc'/>
                  <h3>User's Name</h3>
                </div>
                <hr/>
                <Link className='prof-menu-link' to={'/editprofile'}> 
                  <FontAwesomeIcon icon={faEdit} />
                  <p>Edit Profile</p>
                  <span>{'>'}</span>
                </Link>
                <Link className='prof-menu-link'> 
                  <FontAwesomeIcon icon={faCog} />
                  <p>Settings & Privacy</p>
                  <span>{'>'}</span>
                </Link>
                <Link className='prof-menu-link'  onClick={onLogout}> 
                  <FontAwesomeIcon icon={faSignOutAlt}/>
                  <p>Logout</p>
                  <span>{'>'}</span>
                </Link>
              </div>
            </div>
            </>
          ) : (<Link onClick={() => setShow(true)}>
            <FontAwesomeIcon icon={faUser} />
          </Link>)
        }
        <ProfileModal onClose={() => setShow(false)} show={show} />
      </div>
    </nav>
  );
}



export default Navbar;
