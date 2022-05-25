import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hamburger from 'hamburger-react'
import HamburgerMenu from '../components/HamburgerMenu';
import MainSection from '../components/MainSection';
import MainFooter from '../components/MainFooter';
function Homepage({isOpen,setOpen}) {
  
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <MainSection></MainSection>
    {isOpen && <HamburgerMenu />}
    <MainFooter></MainFooter>
    </>
  )
}

export default Homepage