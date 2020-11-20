import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { uid } from 'uid'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { HiPhone } from 'react-icons/hi'
import './Restaurant.css'

const Restaurant = ({ restaurant }) => {
  const [displayDetails, setDisplayDetails] = useState(false)

  const {
    name,
    address1,
    city,
    state,
    zip,
    lat,
    long,
    telephone,
    website,
    hours,
    attire,
    tagsArray,
    genreArray,
  } = restaurant

  const genres = genreArray.map((genre) => (
    <li key={uid()} className='genres-item'>
      {genre}
    </li>
  ))

  const tags = tagsArray.map((tag) => (
    <li key={uid()} className='tags-item'>
      {tag}
    </li>
  ))

  return (
    <section className='restaurant-container'>
      <section className='default-restaurant-info-container'>
        <section className='default-restaurant-main-info'>
          <p>{name}</p>
          <p>{`${city} , ${state}`}</p>
          <p className='phone-number-wrapper'>
            <HiPhone /> {`+1 ${telephone}`}
          </p>
        </section>

        <ul className='genres-list'>{genres}</ul>
      </section>

      <button
        className='display-details-button'
        onClick={() => setDisplayDetails(!displayDetails)}
      >
        {displayDetails ? (
          <IoIosArrowUp className='display-details-icon' />
        ) : (
          <IoIosArrowDown className='display-details-icon' />
        )}
      </button>

      <section
        className={
          displayDetails ? 'extra-restaurant-info-container' : 'hidden'
        }
      >
        <p>{`${address1} ${city} ${state} ${zip}`}</p>
        <p>{hours}</p>
        <a href={website} target='_blank'>
          {website}
        </a>
        <ul className='tags-list'>{tags}</ul>
        <p>{attire}</p>
      </section>
    </section>
  )
}

export default Restaurant

Restaurant.prototypes = {
  restaurant: PropTypes.object,
}
