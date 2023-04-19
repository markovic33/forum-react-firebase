import React from 'react'
import './navbar.css';
import {Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signUserOut =async () => {
    await signOut(auth);
    navigate('/')
  };
  
  
  return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" className='links'>Home</Link>
            <Link to="/aboute" className='links' >Aboute</Link>
            <Link to="/contact" className='links'>Contact</Link>
        </div>
        <div className='right'>
          {!user ? (
            <Link to="/login" className='links'>Log in / Register</Link>
          ) : (
            <Link to ="/forum" className='links'>Forum</Link>
          )}
            
            <div className='login'>
              {user && (
                <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || " " } alt="logo" width="20" height="20" />
                <button onClick={signUserOut}>Log Out</button>
                </>
              )}
            </div>
        </div>
    </div>
  )
}

export default Navbar