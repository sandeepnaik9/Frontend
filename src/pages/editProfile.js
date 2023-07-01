import React, { useState, useEffect } from 'react'
import userPic from '../assets/user.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProf, reset } from '../reduxFeatures/auth/authSlice';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

function EditProfile() {
  const [userPFP, setUserPFP] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phnum, setPhnum] = useState('');


  const updateProfile = (e) => {
    e.preventDefault();
    const userData = new FormData();
    userData.set('name', name);
    userData.set('bio', bio);
    userData.set('username', username);
    userData.set('email', email);
    userData.set('phnum', phnum);
    userData.set('file', userPFP);    
    dispatch(updateProf(userData));
  }

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );



  // const userId = user?.id;
  // console.log(userId);

  const Name = user?.name;
  const Bio = user?.bio;
  const Username = user?.username;
  const Email = user?.email;
  const Phnum = user?.phnum;

  // console.log(userPFP);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    console.log(user)
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      navigate('/')
      toast.success('Profile Updated!');
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch, userPFP])


const changePFP = (e) =>{
  e.preventDefault();
  setUserPFP(e.target.files[0]);
}

  if (isLoading) {
    return <Spinner />
  }

  const userpfp = user.userPFP ? `http://localhost:8000/${user.userPFP}` : null;

  return (
    <div className='editProf'>
      <img src={userpfp||userPic} alt='userPFP' className='userPFP' />
      <label htmlFor="fileInput" className='ptr pfp-label'>
        Change profile picture
        <input type="file" id="fileInput" name="file" onChange={changePFP} style={{ display: 'none' }} />
      </label>

      <form className='profile-form' onSubmit={updateProfile}>
        <div className='prof-form-item'>
          <label>Name</label><input type="text" className='prof-input' placeholder={Name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='prof-form-item'>
          <label>Bio</label><input type="text" className='prof-input' placeholder={Bio} onChange={e => setBio(e.target.value)} />
        </div>
        <div className='prof-form-item'>
          <label>Username</label><input type="text" className='prof-input' placeholder={Username} onChange={e => setUsername(e.target.value)} minLength={5}/>
        </div>
        <div className='prof-form-item'>
          <label>Email</label><input type="email" className='prof-input' placeholder={Email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='prof-form-item'>
          <label>Ph.no</label><input type="text" className='prof-input' placeholder={Phnum} onChange={e => setPhnum(e.target.value)} />
        </div>
        <button type='submit'>Update Profile</button>
      </form>

    </div>
  )
}

export default EditProfile