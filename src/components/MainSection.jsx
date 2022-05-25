import React from 'react'
import {Suspense} from 'react';
import {AiFillPhone} from 'react-icons/ai';
import {IoIosPin} from 'react-icons/io';
import {FaFax} from 'react-icons/fa';
function MainSection() {
    const Product = React.lazy(() => import('./ProductsElement'));
  
  return (
    <main className='mainPage'>
        <Suspense fallback={<div>Loading</div>}>
            <Product></Product>
        </Suspense>
        <article className='MainPage__Banner'>
            <div className='Banner__description'>
                <h2>do you Need More Tips?</h2>
                <p>Sign up free and get the latest tips.</p>
            </div>
            <div className='Banner__input'>
                <input type='text' placeholder='Your Email...'></input>
                <button type='Submit'>Yes.I Want!</button>
            </div>
        </article>
        <article className='MainPage__company__info'>
            <div className='box Phone__info'>
                <AiFillPhone/>
                <h3>Call Us 24x7</h3>
                <p>0736 230 063</p>
            </div>
            <div className='box localization__info'>
                <IoIosPin/>
                <h3>HeadQuarter</h3>
                <p>New York</p>
            </div>
            <div className=' box fax__info'>
                <FaFax />
                <h3>Fax</h3>
                <p>0736 230 063</p>
            </div>
        </article>
    </main>
  )
}

export default MainSection