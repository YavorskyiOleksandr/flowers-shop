import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

export const Navigation = () => {
  const scrollToHeader = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToHome = () => {
    const homePageElement = document.getElementById('home-page')
    if (homePageElement) {
      homePageElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer')
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='nav-to'>
      <ul>
        <li className='header-nav__item'>
          <Link to='/' onClick={scrollToHeader}>
            Головна
          </Link>
          <div className='header-nav__line'></div>
        </li>
        <li className='header-nav__item'>
          <Link to='#' onClick={scrollToHome}>
            Товари
          </Link>
          <div className='header-nav__line'></div>
        </li>
        <li className='header-nav__item'>
          <Link to='#' onClick={scrollToFooter}>
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  )
}
