import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from "./Spinner";
import {register, reset} from '../reduxFeatures/auth/authSlice'

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phnum: '',
        age: '',
        username: '',
        password: '',
        confirmPass: '',
    })

    const { name, email, phnum, age, username, password, confirmPass } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )
    const closeButton = useRef()
    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== confirmPass){
            toast.error('Passwords do not match')
        }else{
            const userData = {
                name, email, phnum, age, username, password,
            }
            dispatch(register(userData))
        }
    }

    if(!props.showRegister){
        return null;
    }

    const onClick = (e) => {
        e.preventDefault();
        props.setShowRegister(false);
        props.setShowLogin(true);
    }

    if(isLoading){
        return <Spinner/>
    }

    return (
        
        <div className="custom-modal-content">
            <div className="custom-modal-header">
                <h1>Register</h1>
                <button onClick={props.onClose} ref={closeButton}>X</button>
            </div>
            <div className="custom-modal-body">
                <div className="login-page">
                    <div className="form" onSubmit={onSubmit}>
                        <form className="register-form">
                            <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} required/>
                            <input type="email" name="email" placeholder="Email Address" value={email} onChange={onChange} required/>
                            <input type="tel" name="phnum" placeholder="Mobile Number" value={phnum} onChange={onChange} required/>
                            <input type="number" name="age" placeholder="Age" min="1" max="100" value={age} onChange={onChange} required/>
                            <input type="text" name="username" placeholder="Enter a username" value={username} onChange={onChange} required/>
                            <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required/>
                            <input type="password" name="confirmPass" placeholder="Confirm password" value={confirmPass} onChange={onChange} required/>
                            
                            <button>Create account</button>
                            <p className="message">Already registered? <Link onClick={onClick}>Sign In</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;