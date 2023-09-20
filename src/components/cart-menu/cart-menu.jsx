import React from 'react'
import { Link } from 'react-router-dom'
import { calcTotalPrice } from '../total'
import { CartItem } from '../cart-item'
import { Button } from '../button'
import './cart-menu.css'

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className='cart-menu'>
      <div className='cart-menu__seedling-list'>
        {items.length > 0
          ? items.map(seedling => (
              <CartItem
                key={seedling.title}
                price={seedling.price}
                title={seedling.title}
                id={seedling.id}
              />
            ))
          : 'Корзина порожня'}
      </div>
      {items.length > 0 ? (
        <div className='cart-menu__arrange'>
          <div className='cart-menu__total-price'>
            <span>Разом:</span>
            <span>{calcTotalPrice(items)} грн</span>
          </div>
          <Button type='primary' size='m' onClick={onClick}>
            Оформити замовлення
          </Button>
        </div>
      ) : null}
    </div>
  )
}