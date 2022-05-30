import { useState } from 'react'
import GoogleButton from '../image/btn_google_signin_light_normal_web@2x.png';
import {LoginContext} from '../Contexts/LoginContext';
import {useContext} from 'react';
import {auth , provider} from '../firebase-config';
import { signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
function LoginSection() {
  //Context State
    const {loginEmail} = useContext(LoginContext);
    const {setLoginEmail} = useContext(LoginContext);
    const {loginPassword} = useContext(LoginContext);
    const {setLoginPassword} = useContext(LoginContext);
    //set user information
    const [isLoggin,setIsLoggin] = useState(false);
    const [error,setError] = useState('');

    //Functions
   const signIn = () =>{
     signInWithEmailAndPassword(auth,loginEmail,loginPassword).then((result)=>{
       localStorage.setItem('name',result.user.email);
       localStorage.setItem('id',result.user.uid);
       localStorage.setItem('image',result.user.photoURL);
       setIsLoggin(true);
     }).catch(()=>{
      setError('Login Failed! Please Try Again Later')
     })
   }

    const signInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((result) =>{
            localStorage.setItem('name',result.user.displayName);
            localStorage.setItem('id',result.user.uid);
            localStorage.setItem('image',result.user.photoURL);
            setIsLoggin(true);
        }).catch(()=>{
          setError('Login Failed! Please Try Again Later')
        })
    }

  return (
      <article className='Login__Container'>
    <article className='Login__Section'>
        <div className='Login__with__Email'>
            <input onChange={(e) => setLoginEmail(e.target.value) } placeholder='email' type='text'></input>
            <input onChange={(e) => setLoginPassword(e.target.value)} placeholder='password' type="password" />
            {isLoggin && <div className='LoginSuccesfull'>Loggin Succesfull</div>}
            {error}
        </div>
        <div className='Login__with__Google'>
            <button onClick={signIn} className='Email__Button'>Login</button>
            <img onClick={signInWithGoogle} src={GoogleButton} alt="google logIn Button" />
        </div>
    </article>
    </article>
  )
}


export default LoginSection