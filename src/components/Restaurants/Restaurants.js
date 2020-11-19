import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../actions/restaurants'
import Restaurant from '../Restaurant/Restaurant'

const Restaurants = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  const restaurants = useSelector((store) => store.restaurants)

  const mappedRestaurants = restaurants.map((restaurant) => {
    return <Restaurant key={restaurant.id} restaurant={restaurant} />
  })

  return <div>{mappedRestaurants}</div>
}

export default Restaurants
