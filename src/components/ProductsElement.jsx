import React from 'react'
import {db} from '../firebase-config';
import {collection,onSnapshot} from 'firebase/firestore';
import {useState , useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
function ProductsElement() {
    let navigate = useNavigate();
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[])

   async function getProducts(){
       const productRef =  collection(db,'products');
        onSnapshot(productRef , (snap) =>{
        snap.docs.forEach((doc) =>{
              setProducts((products)=> [...products, doc.data()])
          })
       })
   }
   
   const handleItem = (e,id) =>{
       console.log(id);
       navigate(`basket/${id}`);
   }
    return (
        <>
          {products.map((product) => {
              return(
                  <article onClick={(e) =>handleItem(e,product.id)} key={product.id} className="product">
                      <img src={product.image}></img>
                      <h2 className='product__name'>{product.name}</h2>
                      <p className='product__review'><AiFillStar />{product.reviews} reviews</p>
                      <p className='product__price'>${product.price}</p>
                  </article>
              )
          })}
        </>
    )

}

export default ProductsElement