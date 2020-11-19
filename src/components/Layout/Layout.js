import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
