import React from 'react'
import Logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <div className='container' style={{position:'relative',height:'40vh',marginTop:'20vh',background:'linear-gradient(180deg, #FFFFFF 0%, #76ADFF 99.97%, rgba(191, 218, 247, 0) 99.98%)'}}>
        <div style={{display:'flex',}}>
            <div className='logoHolder' style={{margin:'10px'}}>
                <img className='footerLogo' src={Logo} alt="Logo" />
            </div>
            <div>
                <h2 style={{margin:0,marginTop:'30px'}}>HYEV</h2> 
                <p style={{margin:0}}>Go Together, Go Better</p>
                <div>
                <h5 style={{margin:0,marginTop:'20px',marginBottom:'10px'}}>Rubaru volta hotel, Moghal Pura, HYD-500053</h5>
                <h5 style={{margin:0,marginBottom:'10px'}}>hyev2023@gmail.com</h5>   
                <h5 style={{margin:0,marginBottom:'10px'}}>040-6767676767</h5>
            </div>
            </div>
            
        </div>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:0,left:0,width:'100%'}}>
            <div>
                All rights reserved by HPC Pvt Ltd, made by HYEV Team 
            </div>
            <div style={{display:'flex',justifyContent:'space-around',width:'50%'}}>
                <h4>ABOUT US</h4>
                <h4>CONTACT</h4>
                <h4>PRIVACY POLICY</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer