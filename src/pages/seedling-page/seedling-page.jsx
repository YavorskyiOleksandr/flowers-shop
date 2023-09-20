import React from 'react'
import { useSelector } from 'react-redux'
import { SeedlingBuy } from '../../components/seedling-buy'
import { SeedlingPhoto } from '../../components/seedling-photo'
import './seedling-page.css'

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

export const SeedlingPage = () => {
  const seedling = useSelector(state => state.seedling.currentSeedling)

  if (!seedling) return null

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
    <div className='seedling-page'>
      <h1 className='seedling-page__title'>{seedling.title}</h1>
      <div className='seedling-page__content'>
        <div className='seedling-page__left'>
          <div
            style={{
              width: '90%',
              height: '400px',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            title='Photo Player'
          >
            <iframe
              width='100%'
              height='100%'
              src={seedling.video}
              title='Photo Player'
              frameBorder='0'
            ></iframe>
          </div>
        </div>
        <div className='seedling-page__right'>
          <SeedlingPhoto image={image} />
          <p>{seedling.description}</p>
          <div className='seedling-page__buy-seedling'>
            <SeedlingBuy seedling={seedling} />
          </div>
        </div>
      </div>
    </div>
  )
}
