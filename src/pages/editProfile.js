import React, { useState } from 'react'
import userPic from '../assets/user.png'

function EditProfile() {
  const [userPFP, setUserPFP] = useState(userPic);
  return (
    <div className='editProf'>
      <img src={userPFP} alt='userPFP' className='userPFP'/>
      <label htmlFor="fileInput" className='ptr pfp-label'>
      Change profile picture
      <input type="file" id="fileInput" onChange={e => setUserPFP(URL.createObjectURL(e.target.files[0]))}  style={{ display: 'none' }} />
    </label>      
    
    <form className='profile-form' >
    <div className='prof-form-item'>
    <label>Name</label><input type="text" className='prof-input' />
    </div>
    <div className='prof-form-item'>
    <label>Bio</label><input type="text" className='prof-input' />
    </div>
    <div className='prof-form-item'>
    <label>Username</label><input type="text" className='prof-input' />
    </div>
    <div className='prof-form-item'>
    <label>Email</label><input type="text" className='prof-input' />
    </div>
    <div className='prof-form-item'>
    <label>Ph.no</label><input type="text" className='prof-input' />
    </div>
    <button>Update Profile</button>
    </form>

    </div>
  )
}

export default EditProfile