import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from "./Spinner";
import {login, reset} from '../reduxFeatures/auth/authSlice'


const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData

    // const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isError, isLoading, isSuccess} = useSelector(
        (state) => state.auth
    )

    const closeButton = useRef()
    useEffect(() => {
        const auth = () => {
            if (isError) {
              toast.error('Credentials invalid, try again!');
            }
            console.log(isSuccess, 'IS SUCCESS');
            if (isSuccess) {
              // window.location.reload(true);
              dispatch(reset());
            //   console.log("RESET");
              window.location.reload(true);
              toast.success('Welcome ' + user?.name);
            }
           
          };
        
          
        
          return () => {
            auth();
          };

    }, [dispatch, isError, isSuccess, user?.name])

  
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username,
            password,
        }
        dispatch(login(userData))
    }

    if(!props.showLogin){
        return null;
    }
    if(isLoading){
        return <Spinner/>
    }
    return(
    <div className="custom-modal-content" >
    <div className="custom-modal-header">
        <div className="heading" style={{ color: 'black', display: 'inline' }} >Sign in</div>
        <button onClick={props.onClose} ref={closeButton}>X</button>
    </div>
    <div className="custom-modal-body">
        <div className="login-page">
            <div className="auth-form">
            <form className="login-form" onSubmit={onSubmit}>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={onChange} required/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required/>
                    <button>login</button>
                    <p className="message">Not registered? <Link onClick={props.onRegClick}>Create an account</Link></p>
                    <p className="message">Forgot password? <Link onClick={props.onFpClick}>Reset password</Link></p>
                </form>
                                
            </div>
        </div>
    </div>
</div>
);
}
export default Login;