import React, { useContext , useState } from 'react'
import HamburgerMenu from '../components/HamburgerMenu'
import Hamburger from 'hamburger-react'
import Header from '../components/Header'
import {RegisterContext} from '../Contexts/RegisterContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase-config'; 
import RegisterSuccesfull from '../components/RegisterSuccesfull';
import Registerfailer from '../components/Registerfailer';
function Register({isOpen,setOpen}) {
  //Context State
  const {setRegisterEmail} = useContext(RegisterContext);
  const {setRegisterPassword} = useContext(RegisterContext);
  const {registerEmail} = useContext(RegisterContext);
  const {registerPassword} = useContext(RegisterContext);
  const [isRegistered,setIsRegistered] = useState(false);
  const [isProblem,setIsProblem] = useState(false);

  //register function
  const register = async () =>{
    try{
      await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      setRegisterEmail("");
      setRegisterPassword("");
      setIsRegistered(true)
    }catch(error){
      setIsProblem(true);
    }
  }

  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <article className='register__block'>
      <div className='register'>
        <input onChange={(e) => setRegisterEmail(e.target.value)} type='text' placeholder='email'></input>
        <input onChange={(e) => setRegisterPassword(e.target.value)} type='password' placeholder='password'></input>
        <button onClick={register}>register</button>
        {isRegistered && <RegisterSuccesfull/> }
        {isProblem && <Registerfailer/>}
      </div>
    </article>
   {  isOpen && <HamburgerMenu />}
   </>
  )
}

export default Register