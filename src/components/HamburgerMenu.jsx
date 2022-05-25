import React from 'react'
import {BsBasket} from 'react-icons/bs';
import { Link } from 'react-router-dom';
function HamburgerMenu() {
  return (
    <article className='Hamburger__menu'>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/basket/:id'><BsBasket /></Link>
      </nav>
    </article>
  )
}

export default HamburgerMenu