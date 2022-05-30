import {basketContext} from '../Contexts/shopContext';
import {useContext} from 'react';
import ItemQuantityCalculator from '../components/ItemQuantityCalculator';
function Basket() {
  //Context State
  const {basketItems} = useContext(basketContext);
  const {setBasketItems} = useContext(basketContext);
  const {setBasketNumber} = useContext(basketContext);
  const {basketNumber} = useContext(basketContext);

  //Functions
  const deleteItem = (id) =>{
    let newBasketItems = basketItems.filter((item)=>{
      return item.itemId !== id
    })
    setBasketItems(newBasketItems);
    setBasketNumber((prev) => prev - 1)
  }
  return (
    <>
    <article className='basket__container'>
      <div className='Products'>Total Cart Product: {basketNumber}</div>
      <article className='basket__products'>
      {basketItems.map((item) =>{
        return(
        <div key={item.itemId} className='basket__product'>
          <div className='basket__deleteItem'><p onClick={()=>deleteItem(item.itemId)}>X</p></div>
          <img alt='product' className='basket__product__image' src={item.image}></img>
          <div className='basket__description'>
            <h2>{item.name}</h2>
            <h2>{item.price} $</h2>
            <ItemQuantityCalculator  itemPrice={item.price} itemQuantity={item.quantity}/>
          </div>
        </div>
        )
      })}
      </article>
    </article>
    </>
  )
}

export default Basket