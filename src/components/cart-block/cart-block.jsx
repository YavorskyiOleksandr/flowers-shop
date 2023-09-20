import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartMenu } from '../cart-menu'
import ShoppingCart from '../../images/shopping-cart.svg'
import { calcTotalPrice } from '../total'
import { ItemsInCart } from '../items-in-cart'
import './cart-block.css'

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const navigate = useNavigate()
  const totalPrice = calcTotalPrice(items)
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate('/order')
  }, [navigate])

  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length} />
      <img
        width={30}
        height={30}
        src={ShoppingCart}
        alt='Корзина товарів'
        className='cart-block__icon'
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className='cart-block__total-price'>{totalPrice} грн</span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu items={items} onClick={handleGoToOrderClick} />
      )}
    </div>
  )
}
