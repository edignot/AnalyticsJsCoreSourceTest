import React from 'react'
import Restaurants from '../../containers/Restaurants/Restaurants'
import Form from '../../containers/Form/Form'
import './RestaurantsPage.css'

const RestaurantsPage = () => {
  return (
    <section className='restaurants-page-container'>
      <Form />
      <Restaurants />
    </section>
  )
}

export default RestaurantsPage
