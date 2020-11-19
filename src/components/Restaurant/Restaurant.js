import React from 'react'

const Restaurant = ({ restaurant }) => {
  const {
    id,
    name,
    address1,
    city,
    state,
    zip,
    lat,
    long,
    telephone,
    tags,
    website,
    genre,
    hours,
    attire,
    tagsArray,
    genreArray,
  } = restaurant

  const genres = genreArray.map((genre) => <li>{genre}</li>)
  return (
    <section>
      <p>{name}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{telephone}</p>
      <ul>{genres}</ul>
    </section>
  )
}

export default Restaurant
