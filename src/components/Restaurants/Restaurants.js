import React, { useEffect, useState } from 'react'
import { uid } from 'uid'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../actions/restaurants'
import Restaurant from '../Restaurant/Restaurant'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const Restaurants = () => {
  const dispatch = useDispatch()

  // set is loading
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  const restaurants = useSelector((store) => store.restaurants)

  const mappedRestaurants = restaurants.map((restaurant) => {
    return (
      <>
        <Restaurant key={uid()} restaurant={restaurant} />
        {loading && <LoadingSpinner asOverlay />}
      </>
    )
  })

  return <div>{mappedRestaurants}</div>
}

export default Restaurants
