import React from 'react'
import { useDispatch } from 'react-redux'
import { SeedlingPhoto } from '../seedling-photo'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import DeletePh from '../../images/delete_icon.png'
import './order-item.css'

import samshitImage from '../../images/samshit.png'
import hortenziyaImage from '../../images/hortenziya.jpg'
import tuyaImage from '../../images/tuya.jpeg'
import gauraImage from '../../images/gaura.jpg'
import mazusImage from '../../images/mazus.webp'
import verbaImage from '../../images/verba.png'
import plyushImage from '../../images/plyush.jpg'
import lohynaImage from '../../images/lohyna.jpg'
import tisImage from '../../images/tis.webp'
import kostrytsyaImage from '../../images/kostrytsya.jpg'
import yalytsyaImage from '../../images/yalytsya.jpg'
import pavloniyaImage from '../../images/pavloniya.jpeg'

export const OrderItem = ({ seedling }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(deleteItemFromCart(seedling.id))
  }

  let image = null

  switch (seedling.image) {
    case 'Sumshit':
      image = samshitImage
      break
    case 'Hortenziya':
      image = hortenziyaImage
      break
    case 'Tuya':
      image = tuyaImage
      break
    case 'Gaura':
      image = gauraImage
      break
    case 'Mazus':
      image = mazusImage
      break
    case 'Verba':
      image = verbaImage
      break
    case 'Plyush':
      image = plyushImage
      break
    case 'Lohyna':
      image = lohynaImage
      break
    case 'Tis':
      image = tisImage
      break
    case 'Kostrytsya':
      image = kostrytsyaImage
      break
    case 'Yalytsya':
      image = yalytsyaImage
      break
    case 'Pavloniya':
      image = pavloniyaImage
      break
    default:
      break
  }

  return (
    <div className='order-item'>
      <div className='order-item__photo'>
        <SeedlingPhoto image={image} />
      </div>
      <div className='order-item__title'>
        <span>{seedling.title}</span>
      </div>
      <div className='order-item__price'>
        <span className='order-item__price-goods'>{seedling.price} грн</span>
        <img
          width={30}
          height={30}
          src={DeletePh}
          alt='Видалити з кошика'
          className='cart-item__delete-icon'
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
