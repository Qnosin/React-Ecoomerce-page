import { useState } from 'react'

function ItemQuantityCalculator({itemPrice,itemQuantity}) {
    const [quantity,setQuantity] = useState(itemQuantity);
  return (
    <div className='basket__quantity__calculator'>
        <label htmlFor="quantity">Quantity:</label>
          <select defaultValue={itemQuantity} onChange={(e) => setQuantity(e.target.value)}  name='quantity'>
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
         <h3>subtotal: {itemPrice * quantity} $</h3>
    </div>
  )
}

export default ItemQuantityCalculator