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
  const session = useSelector((store) => store.session)

  const mappedRestaurants =
    !session.filteredRestaurants.length &&
    restaurants.map((restaurant) => {
      return <Restaurant key={uid()} restaurant={restaurant} />
    })

  const filteredRestaurants =
    session.filterApplied &&
    restaurants.filter((restaurant) =>
      session.filteredRestaurants.includes(restaurant.id),
    )

  const filteredMappedRestaurants =
    filteredRestaurants.length &&
    filteredRestaurants.map((restaurant) => {
      return <Restaurant key={uid()} restaurant={restaurant} />
    })

  return (
    <>
      <div>{mappedRestaurants || filteredMappedRestaurants}</div>
      {loading && <LoadingSpinner asOverlay />}
    </>
  )
}

export default Restaurants
