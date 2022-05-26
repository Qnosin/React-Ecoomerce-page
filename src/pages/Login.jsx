import React from 'react'
import Header from '../components/Header'
import Hamburger from 'hamburger-react'
import HamburgerMenu from '../components/HamburgerMenu'
import LoginSection from '../components/LoginSection'
function Login({isOpen,setOpen}) {
  return (
    <>
     <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <LoginSection />
    {isOpen && <HamburgerMenu />}
    </>
  )
}

export default Login