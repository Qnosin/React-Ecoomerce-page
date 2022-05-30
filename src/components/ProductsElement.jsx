import {db} from '../firebase-config';
import {collection,getDocs} from 'firebase/firestore';
import {useState , useEffect } from 'react';
import {AiFillStar} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
function ProductsElement() {
    //Use Navigate
    let navigate = useNavigate();
    //State
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    //Firebase Ref
    const productRef =  collection(db,'products');
    //Get Data
    useEffect(()=>{
        const getProducts = async ()=>{
            const data = await getDocs(productRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getProducts();
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
    },[productRef])

    //Function
   const handleItem = (id) =>{
       navigate(`Product/${id}`);
   }
    return (
        <>
        {isLoading === true
         ?
        <div className='load'></div>
         :
         products.map((product) => {
            return(
              <article onClick={(e) =>handleItem(product.id)} key={product.id} className="product">
                  <img alt='product representation' src={product.image}></img>
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