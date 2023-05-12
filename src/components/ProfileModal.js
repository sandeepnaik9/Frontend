import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ForgetPass from "./ForgetPass";


const ProfileModal = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showFp, setShowFp] = useState(false);
    
  const closeModal = (e) => {
        e.preventDefault();
        props.onClose()
        setShowLogin(true);
        // setShowLogin(false);
        setShowRegister(false);
        setShowFp(false);

    }

    const onRegClick = (e) =>{
      // e.preventDefault();
        setShowRegister(true);
        setShowLogin(false);
        setShowFp(false);
    }

    const onFpClick = (e) => {
      //e.preventDefault();
        setShowFp(true);
        setShowLogin(false);
        setShowRegister(false);
    }

    //setShowLogin(true);
    if(!props.show){
            return null;
        }
    return (

        <div className="modal">
       <Login onClose={closeModal} showLogin = {showLogin} setShowLogin = {setShowLogin} onRegClick={onRegClick} onFpClick={onFpClick} /> 
       <Register onClose={closeModal} showRegister = {showRegister} setShowRegister={setShowRegister} setShowLogin = {setShowLogin} /> 
       <ForgetPass onClose={closeModal} showFp = {showFp} setShowFp={setShowFp} setShowLogin = {setShowLogin}/>
        </div>
    )
}

export default ProfileModal