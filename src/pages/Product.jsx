import { useState, useEffect , useContext } from 'react'
import {useParams} from 'react-router-dom';
import {getDoc,doc} from 'firebase/firestore';
import {db} from '../firebase-config';
import {AiFillStar} from 'react-icons/ai';
import {basketContext} from '../Contexts/shopContext';
import uuid from 'react-uuid'

function Product() {
  //context State
    const {setBasketNumber} = useContext(basketContext);
    const {setBasketItems} = useContext(basketContext);
    const {setQuantity} = useContext(basketContext);
    const {quantity} = useContext(basketContext);
    //State from url
    const {id} = useParams();
    //Firebase Ref
    const productRef = doc(db,'products',id)
    //LocalStates
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
  },[productRef])

  //Functions
  const quantitySelect = (e) =>{
    setQuantity(e.target.value);
  }

  const addingToBasket = () =>{
    setBasketNumber((prev) => prev + 1)
    setBasketItems((prev) => ([...prev,{...productData,quantity:quantity,itemId:uuid()}]));
  }
  return (
    <>
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
    </>
  )
}

export default Product