import React, { useEffect, useState } from 'react'
import { uid } from 'uid'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../actions/restaurants'
import Restaurant from '../Restaurant/Restaurant'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const Restaurants = () => {
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [restaurantsPerPage, setRestaurantsPerPage] = useState(10)

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true)
      await dispatch(getRestaurants())
      setLoading(false)
    }
    fetchRestaurants()
  }, [dispatch])

  const restaurants = useSelector((store) => store.restaurants)

  const session = useSelector((store) => store.session)

  const filteredRestaurants =
    session.filterApplied &&
    restaurants.filter((restaurant) =>
      session.filteredRestaurants.includes(restaurant.id),
    )

  const restaurantsToMap = filteredRestaurants || restaurants

  const mappedRestaurants = restaurantsToMap.map((restaurant) => {
    return <Restaurant key={uid()} restaurant={restaurant} />
  })

  return (
    <>
      <div>{mappedRestaurants}</div>
      {loading && <LoadingSpinner asOverlay />}
    </>
  )
}

export default Restaurants
