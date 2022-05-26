import React from 'react'
import {BsBasket} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase-config';
import {useNavigate} from 'react-router-dom';
function HamburgerMenu() {
  let navigate = useNavigate();
  const LogOut = async () =>{
    await signOut(auth);
    localStorage.removeItem('name');
    localStorage.removeItem('image');
    localStorage.removeItem('id');
    navigate('/');
    window.location.reload();
}
  return (
    <article className='Hamburger__menu'>
      <nav>
      {localStorage.getItem('name') === null ? <Link to={'/login'}>Login</Link> : <Link to={`/profile/${localStorage.getItem('name')}`}>{localStorage.getItem('name')}</Link> }
      {localStorage.getItem('name') === null ? <Link to={'/Register'}>Register</Link> : <div onClick={LogOut} className='SignOutButton'>Log Out</div> }
      <Link to='/basket/:id'><BsBasket /></Link>
      </nav>
    </article>
  )
}

export default HamburgerMenu