import React from 'react'
import { CartBlock } from '../cart-block/cart-block'
import { Link, useLocation } from 'react-router-dom'
import { Navigation } from '../../routing/navigation'
import { LogoForH1 } from '../logo-for-h1/logo-for-h1'
import './header.css'

export const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div id='header' className='header'>
      <div className='wrapper'>
        <Link to='/' className='header__store-title'>
          <h1>Zeleno.ua</h1>
          {!isHomePage && <LogoForH1 />}
        </Link>
        {isHomePage && <Navigation />}
        <div className='header__cart-btn'>
          <CartBlock />
        </div>
      </div>
    </div>
  )
}
