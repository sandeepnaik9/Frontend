import React from "react";
import { Link } from "react-router-dom";
//import { useState } from "react";


const Login = (props) => {
    //const [showLogin, setShowLogin] = useState(true);
    
    if(!props.showLogin){
        return null;
    }
    return(
    <div className="modal-content" >
    <div className="modal-header">
        <h1>Sign in</h1>
        <button onClick={props.onClose}>X</button>
    </div>
    <div className="modal-body">
        <div class="login-page">
            <div class="form">
            <form class="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>login</button>
                    <p class="message">Not registered? <Link onClick={props.onRegClick}>Create an account</Link></p>
                    <p class="message">Forgot password? <Link onClick={props.onFpClick}>Reset password</Link></p>
                    <button>login as host</button>
                </form>
                                
            </div>
        </div>
    </div>
</div>
);
}
export default Login;