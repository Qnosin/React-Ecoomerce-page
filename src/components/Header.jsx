import React from 'react'
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram , AiOutlineLinkedin , AiOutlineYoutube} from 'react-icons/ai'
import {RiPinterestLine} from 'react-icons/ri';
import { UserContext } from '../Contexts/UserContext';
import { Link, Navigate } from 'react-router-dom';
import {BsBasket} from 'react-icons/bs';
import Logo from '../image/shoes-store-logo.png';
import {useContext} from 'react';
import {basketContext} from '../Contexts/shopContext';
import {signOut , onAuthStateChanged} from 'firebase/auth';
import {auth} from '../firebase-config';
import {useNavigate} from 'react-router-dom';

function Header({setSendRequest}) {
  const {basketNumber} = useContext(basketContext);
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  let navigate = useNavigate();
  onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser)
  })

  const LogOut = async () =>{
      await signOut(auth);
      localStorage.removeItem('name');
      localStorage.removeItem('image');
      localStorage.removeItem('id');
  }
  return (
    <header className='header'>
        <article className="header__upper__info">
        <article className='header__details'>
          <div className='phone__contact'>
            <p>+255 768 356 890</p>
          </div>
          <div className='email__contact'>
            <p>info@zpunet.com</p>
          </div>
          </article>
        <article className='header__socialmedia'>
                <FiFacebook />
                <AiOutlineInstagram />
                <AiOutlineLinkedin />
                <AiOutlineYoutube />
                <RiPinterestLine />
            </article>
        </article>
        {/* Without hamburger make this apper */}
        {/* Create article with navbar, on mobile everything is on hamburger menu */}
        <article className='header__lower__info'>
            <nav>
              <div className='header__logo'>
               <Link to={'/'}><img src={Logo}></img></Link> 
              </div>
            <div className='header__lower__input'>
              <input placeholder='Search' type="text" />
              <button>Search</button>
            </div>
            <div className='header__lower__menu'>
            {localStorage.getItem('name') === null ? <Link to={'/Register'}>Register</Link> : <Link to={`/profile/${localStorage.getItem('name')}`}>{localStorage.getItem('name')}</Link> }
            {localStorage.getItem('name') === null ?  <Link to={'/login'}>Login</Link> : <div onClick={LogOut} className='SignOutButton'>Log Out</div> }
            <Link to={'/basket'}><BsBasket /></Link>
            <div className='header__basket__number'>{basketNumber}</div>
            </div>
            </nav>
        </article>
    </header>
  )
}

export default Header