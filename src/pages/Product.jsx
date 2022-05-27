import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {getDoc,doc} from 'firebase/firestore';
import {db} from '../firebase-config';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import Hamburger from 'hamburger-react';
import {AiFillStar} from 'react-icons/ai';
import {useContext} from 'react';
import {basketContext} from '../Contexts/shopContext';
function Product({isOpen,setOpen}) {
    const {setBasketNumber} = useContext(basketContext);
    const {setBasketItems} = useContext(basketContext);
    const {setQuantity} = useContext(basketContext);
    const {quantity} = useContext(basketContext);
    const {id} = useParams();
    const productRef = doc(db,'products',id)
    const [productData,setProductData] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    useEffect(()=>{
      const getProduct = async ()=>{
        let data = await getDoc(productRef);
        setProductData(() => ({...data.data()}));
        setTimeout(()=>{
          setIsLoading(false);
        },1000)
      }
      getProduct();
  },[])
  const quantitySelect = (e) =>{
    //Quantity
    setQuantity(e.target.value);
  }

  const addingToBasket = () =>{
    setBasketNumber((prev) => prev + 1)
    setBasketItems((prev) => ([...prev,{...productData}]));
  }
  return (
    <>
    <Hamburger toggled={isOpen} toggle={setOpen} />
    <Header></Header>
    <article className='Product__container'>
        {isLoading === true ? 
        <div className="load"></div> 
        : <> 
        <div className='Product__info'>
          <img src={productData.image} alt="item" />
            <div className='product__info__detail'>
              <h2>{productData.name}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eum quisquam voluptate ex molestias aspernatur quaerat recusandae reprehenderit ea et.</p>
              <div className='quantity'>
                <label htmlFor='quantity'>Choose a quantity:</label>
                <select onChange={(e) => quantitySelect(e)} name='quantity'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                </div>
              <button onClick={()=> addingToBasket()}>Add to Basket</button>
            </div>
      </div>
      <div className='Product__Presentation__Option'>
        <div className='first__block'>
          <p>Price</p>
          <p>{productData.price}</p>
        </div>
        <div className='Second__block'>
          <p>Reviews</p>
          <p><AiFillStar/>{productData.reviews}</p>
        </div> 
          </div>
          </>}
    </article>
        
    {isOpen && <HamburgerMenu />}
    </>
  )
}

export default Product