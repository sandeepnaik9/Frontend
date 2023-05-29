import React from "react";
import { Link } from "react-router-dom";


const ForgetPass = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        props.setShowLogin(true)
        props.setShowFp(false);
    }
    if(!props.showFp){
        return null;
    }
    return(
       
    <div className="custom-modal-content">
    <div className="custom-modal-header">
        <h1>Forget Password</h1>
        <button onClick={props.onClose}>X</button>
    </div>
    <div className="custom-modal-body">
        <div className="login-page">
            <div className="form">
            <form className="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Email" />
                    <button>Send Link</button>
                    <p className="message">Back to login <Link onClick={onClick}>Login</Link></p>
                </form>
               
            </div>
        </div>
    </div>
</div>
);
}
export default ForgetPass;