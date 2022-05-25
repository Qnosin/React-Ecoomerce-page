import React from 'react'
import {useParams} from 'react-router-dom';
function Basket() {
    let { id } = useParams();
  return (
    <div>Basket</div>
  )
}

export default Basket