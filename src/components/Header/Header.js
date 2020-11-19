import React, { useState } from 'react'
import logo from '../../logo.svg'
import ScrollHide from '../../components/ScrollHide/ScrollHide'
import './Header.css'

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  ScrollHide((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <section className='logo-wrapper'>
        <img src={logo} className='logo left' alt='logo' />
        <img src={logo} className='logo middle' alt='logo' />
        <img src={logo} className='logo right' alt='logo' />
      </section>

      <h1>Restaurants Search Engine</h1>
    </header>
  )
}

export default Header
