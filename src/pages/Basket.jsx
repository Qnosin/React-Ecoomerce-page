import React from 'react'
import {basketContext} from '../Contexts/shopContext';
import {useContext} from 'react';
import Header from '../components/Header'
import Hamburger from 'hamburger-react'
import HamburgerMenu from '../components/HamburgerMenu';
function Basket({isOpen,setOpen}) {
  const {basketItems} = useContext(basketContext);
  const {setBasketItems} = useContext(basketContext);
  const {setBasketNumber} = useContext(basketContext);
  const clear = () =>{
    setBasketItems([]);
    setBasketNumber(0);
  }
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <article className='basket__container'>
      <button onClick={clear}>Clear Basket</button>
    </article>
    {isOpen && <HamburgerMenu />}
    </>
  )
}

export default Basket