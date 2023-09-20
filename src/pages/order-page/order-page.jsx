import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { OrderItem } from '../../components/order-item'
import { calcTotalPrice } from '../../components/total'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import './order-page.css'

const deleteItemFromServer = itemId => {
  return axios.delete(
    `https://65038d90a0f2c1f3faec075e.mockapi.io/order-items/${itemId}`
  )
}

export const OrderPage = () => {
  const items = useSelector(state => state.cart.itemsInCart)
  const dispatch = useDispatch()

  const [isOrderPlaced, setOrderPlaced] = useState(false)

  useEffect(() => {
    if (items.length > 0 && isOrderPlaced) {
      axios
        .post('https://65038d90a0f2c1f3faec075e.mockapi.io/order-items', items)
        .then(res => {
          console.log('Товари відправлені на сервер:', res.data)
          dispatch({ type: 'cart/clearCart' })
        })
        .catch(error => {
          console.error('Помилка при відправленні товарів на сервер:', error)
        })
    }
  }, [items, isOrderPlaced, dispatch])

  const handleDeleteItem = itemId => {
    deleteItemFromServer(itemId)
      .then(() => {
        dispatch(deleteItemFromCart(itemId))
      })
      .catch(error => {
        console.error('Помилка при видаленні товару з сервера:', error)
      })
  }

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
  }

  if (items.length < 1) {
    return (
      <div className='container_empty-basket'>
        <p className='empty-basket'>Тепер Ваш кошик пустий &#128524;</p>
        <Link to='/' className='header__store-title'>
          <button className='back-button'>&#8678; Назад</button>
        </Link>
      </div>
    )
  }

  return (
    <div className='order-page'>
      <div className='order-page__left'>
        {items.map(seedling => (
          <OrderItem
            seedling={seedling}
            key={seedling.id}
            onDelete={() => handleDeleteItem(seedling.id)}
          />
        ))}
      </div>
      <div className='order-page__right'>
        <div className='order-page__total-price'>
          <span>
            {items.length} товарів на суму {calcTotalPrice(items)} грн
          </span>
        </div>
        {!isOrderPlaced && (
          <button className='place-order-button' onClick={handlePlaceOrder}>
            Підтвердити замовлення
          </button>
        )}
      </div>
    </div>
  )
}
