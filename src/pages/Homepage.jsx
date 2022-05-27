import React, { useContext, useEffect,useState } from 'react'
import Header from '../components/Header'
import Hamburger from 'hamburger-react'
import HamburgerMenu from '../components/HamburgerMenu';
import MainSection from '../components/MainSection';
import MainFooter from '../components/MainFooter';
import {onAuthStateChanged} from 'firebase/auth';
import {UserContext} from '../Contexts/UserContext';
import {auth} from '../firebase-config';
function Homepage({isOpen,setOpen}) {
  const {setUser} = useContext(UserContext);
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <MainSection ></MainSection>
    {isOpen && <HamburgerMenu />}
    <MainFooter></MainFooter>
    </>
  )
}

export default Homepage