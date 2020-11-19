import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRestaurants } from '../../actions/restaurants'

const Restaurants = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])
  return <div>Restaurants</div>
}

export default Restaurants
