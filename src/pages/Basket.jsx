import React, { useRef, useState } from 'react'
import {basketContext} from '../Contexts/shopContext';
import {useContext} from 'react';
import Header from '../components/Header'
import Hamburger from 'hamburger-react'
import HamburgerMenu from '../components/HamburgerMenu';
function Basket({isOpen,setOpen}) {
  const {basketItems} = useContext(basketContext);
  const {setBasketItems} = useContext(basketContext);
  const {setBasketNumber} = useContext(basketContext);
  const {basketNumber} = useContext(basketContext);
  const {itemsQuantity,setQuantity} = useContext(basketContext);
  const selectValue = useRef(null);
  const deleteItem = () =>{
    
  }
  const itemsQuantityCalculate = (e) =>{
    
  }
  console.log(basketItems);
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <article className='basket__container'>
      <div className='Products'>Total Cart Product: {basketNumber}</div>
      <article className='basket__products'>
      {basketItems.map((item) =>{
        return(
        <div className='basket__product'>
          <div className='basket__deleteItem'>X</div>
          <img className='basket__product__image' src={item.image}></img>
          <div className='basket__description'>
          <h2>{item.name}</h2>
          <label htmlFor="quantity">Quantity:</label>
          <select defaultValue={item.quantity} onChange={(e) => itemsQuantityCalculate(e) }  name='quantity'>
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
            <h2>{item.price} $</h2>
            <h2>subtotal: {item.price * item.quantity} $</h2>
          </div>
        </div>
        )
      })}
      </article>
    </article>
    {isOpen && <HamburgerMenu />}
    </>
  )
}

export default Basket