import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
    if(!props.showRegister){
        return null;
    }
    const onClick = (e) => {
        e.preventDefault();
        props.setShowRegister(false);
        props.setShowLogin(true);
    }
    return (
        
        <div className="modal-content">
            <div className="modal-header">
                <h1>Register</h1>
                <button onClick={props.onClose}>X</button>
            </div>
            <div className="modal-body">
                <div class="login-page">
                    <div class="form">
                        <form class="register-form">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Mobile Number" />
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Password" />
                            <input type="password" placeholder="Confirm password" />
                            
                            <button>create</button>
                            <p class="message">Already registered? <Link onClick={onClick}>Sign In</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;