import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram , AiOutlineLinkedin , AiOutlineYoutube} from 'react-icons/ai'
import {RiPinterestLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {BsBasket} from 'react-icons/bs';
import Logo from '../image/shoes-store-logo.png';
import {useContext} from 'react';
import {basketContext} from '../Contexts/shopContext';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase-config';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';

function Header() {
  const {basketNumber} = useContext(basketContext);
  let navigate = useNavigate();
  

  const LogOut = async () =>{
      await signOut(auth);
      localStorage.removeItem('name');
      localStorage.removeItem('image');
      localStorage.removeItem('id');
      navigate('/')
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
        <article className='header__lower__info'>
            <nav>
              <div className='header__logo'>
               <Link to={'/'}><motion.img animate={{scale:1,opacity:1}} initial={{scale:0,opacity:0}} transition={{type:'spring'}} alt='logo of brand' src={Logo}></motion.img></Link> 
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