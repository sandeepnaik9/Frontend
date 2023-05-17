import React from 'react'
import Logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid' style={{position:'relative',height:'250px',overflow:'hidden',marginTop:'200px',background:'linear-gradient(180deg, #FFFFFF 0%, #76ADFF 99.97%, rgba(191, 218, 247, 0) 99.98%)'}}>
        <div style={{display:'flex',}}>
            <div className='logoHolder' style={{margin:'10px'}}>
                <img className='footerLogo' src={Logo} alt="Logo" />
            </div>
            <div>
                <div style={{margin:0,marginTop:'30px',fontSize:'32px',fontWeight:'700'}}>HYEV</div> 
                <div style={{margin:0}}>Go Together, Go Better</div>
                <div>
                <div style={{margin:0,marginTop:'20px',marginBottom:'10px'}}>Rubaru volta hotel, Moghal Pura, HYD-500053</div>
                <div style={{margin:0,marginBottom:'10px'}}>hyev2023@gmail.com</div>   
                <div style={{margin:0,marginBottom:'10px'}}>040-6767676767</div>
            </div>
            </div>
            
        </div>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:0,left:0,width:'100%'}}>
            <div>
                All rights reserved by HPC Pvt Ltd, made by HYEV Team 
            </div>
            <div style={{display:'flex',justifyContent:'space-around',width:'50%'}}>
                <Link to="/about" className="btn link">ABOUT US</Link>
                <Link to="/contact" className="btn link">CONTACT</Link>
                <Link to="/privacy" className='btn link'>PRIVACY POLICY</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer