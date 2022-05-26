import React from 'react'
import {db} from '../firebase-config';
import {collection,getDocs} from 'firebase/firestore';
import {useState , useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
function ProductsElement({}) {
    let navigate = useNavigate();
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const productRef =  collection(db,'products');
    useEffect(()=>{
        const getProducts = async ()=>{
            const data = await getDocs(productRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getProducts();
    },[])

   const handleItem = (e,id) =>{
       navigate(`Product/${id}`);
   }
    return (
        <>
          {products.map((product) => {
              return(
                  <>
                  <article onClick={(e) =>handleItem(e,product.id)} key={product.id} className="product">
                      <img onLoad={()=>setIsLoading(false)} src={product.image}></img>
                      {isLoading && <div className="load"></div>}
                      <h2 className='product__name'>{product.name}</h2>
                      <p className='product__review'><AiFillStar />{product.reviews} reviews</p>
                      <p className='product__price'>${product.price}</p>
                  </article>
                  </>
              )
          })}
        </>
    )

}

export default ProductsElement