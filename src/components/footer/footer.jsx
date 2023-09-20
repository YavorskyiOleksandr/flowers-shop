import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [shouldHideFooterNav, setShouldHideFooterNav] = useState(false)
  const [footerHeight, setFooterHeight] = useState('auto')

  useEffect(() => {
    if (location.pathname.includes('/app') || location.pathname === '/order') {
      setShouldHideFooterNav(true)
      setFooterHeight('136px')
    } else {
      setShouldHideFooterNav(false)
      setFooterHeight('auto')
    }
  }, [location.pathname])

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

  return (
    <footer id='footer' className='footer' style={{ height: footerHeight }}>
      <div className='container'>
        <div className='brand-cont'>
          <h3 className='brand'>Контакти:</h3>
        </div>
        <nav>
          <ul className='menu'>
            <li>
              <a href='tel:(097)6988564' className='menu-link'>
                (097) 698-85-64
              </a>
            </li>
            <li>
              <a href='tel:(063)9744221' className='menu-link'>
                (063) 974-42-21
              </a>
            </li>
            <li>
              <a href='tel:(099)5389402' className='menu-link'>
                (099) 538-94-02
              </a>
            </li>
          </ul>
        </nav>
        {shouldHideFooterNav ? null : (
          <div className='footer_nav_block'>
            <div className='brand'>
              <h4>Повернутись до:</h4>
            </div>
            <nav className='footer-nav'>
              <ul>
                <li className='footer-nav__item'>
                  <Link
                    to='/'
                    onClick={scrollToHeader}
                    className='menu-link no-highlight'
                  >
                    Головна
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link to='#' onClick={scrollToHome}>
                    Товари
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link to='#'>Контакти</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <div className='social-icons'>
          <a
            href='https://www.linkedin.com/in/oleksandr-yavorskyi-b4015822b'
            className='social-icon social-icon-linkedin'
            style={{ color: '#0072b1' }}
          >
            <i className='fa-brands fa-linkedin-in'></i>
          </a>
          <a
            href='https://twitter.com/sasha_yavorskyi?t=0eGJZ2cALU5v3e2LaDCXDQ&s=09'
            className='social-icon social-icon-twitter'
            style={{ color: '#000000' }}
          >
            <i className='fa-brands fa-x-twitter'></i>
          </a>
          <a
            href='https://github.com/YavorskyiOleksandr'
            className='social-icon social-icon-github'
            style={{ color: '#000000' }}
          >
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
