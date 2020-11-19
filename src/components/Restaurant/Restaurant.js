import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { uid } from 'uid'
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

  const genres = genreArray.map((genre) => <li key={uid()}>{genre}</li>)

  const tags = tagsArray.map((tag) => <li key={uid()}>{tag}</li>)

  return (
    <section>
      <section>
        <p>{name}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{telephone}</p>
        <ul>{genres}</ul>
        <button onClick={() => setDisplayDetails(!displayDetails)}>
          See More Details
        </button>
      </section>

      <section className={displayDetails ? '' : 'hidden'}>
        <p>{`${address1} ${city} ${state} ${zip}`}</p>
        <p>{hours}</p>
        <a href={website} target='_blank'>
          {website}
        </a>
        <ul>{tags}</ul>
        <p>{attire}</p>
      </section>
    </section>
  )
}

export default Restaurant

Restaurant.prototypes = {
  restaurant: PropTypes.object,
}
