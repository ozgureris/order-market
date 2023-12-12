import React from 'react'
import '../style.css'
import BasketItem from './BasketItem'

const Basket = ({basket, resetBasket, products}) => {
  return (
    <div className='basket-container'>
        <h3 className='card-title centered-text'>Your Cart<i class="fa-solid fa-carrot"></i></h3>
        {basket.map(item => (
        <BasketItem product={products.find(p => p.id === item.id)} item={item}/>
            ))}
        {basket[0] && <button className='btn' onClick={resetBasket}>Delete All</button> || 
        <p className='centered-text'>Your card is empty right now!</p>}
    </div>
  )
}

export default Basket
