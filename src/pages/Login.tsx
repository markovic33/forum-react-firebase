import React from 'react'
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/aboute');
  }

  return (
    <div className='login__'>
        <p>Sign In with Google to Continue</p>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default Login