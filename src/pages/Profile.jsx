import Hamburger from 'hamburger-react';
import React from 'react'
import {useParams} from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';
import Header from '../components/Header';
import {db} from '../firebase-config';
import {query,where} from 'firebase/firestore';
function Profile({isOpen,setOpen}) {
    const {name} = useParams();
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
    <Header></Header>
    <article className='Profile__container'>
        <img src={localStorage.getItem('image')}></img>
        <div className='information'>
            <p>{localStorage.getItem('email')}</p>
            <p>{name}</p>
        </div>
    </article>
    {isOpen && <HamburgerMenu/>}
    </>
  )
}

export default Profile