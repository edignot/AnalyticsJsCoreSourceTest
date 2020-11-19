import React, { useEffect, useState } from 'react'
import { uid } from 'uid'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../actions/restaurants'
import Restaurant from '../Restaurant/Restaurant'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Pagination from '../Pagination/Pagination'
import { setCurrentPageNumber } from '../../actions/session'

const Restaurants = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector((store) => store.restaurants)

  const session = useSelector((store) => store.session)

  const [loading, setLoading] = useState(false)
  const [restaurantsPerPage] = useState(10)

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true)
      await dispatch(getRestaurants())
      setLoading(false)
    }
    fetchRestaurants()
  }, [dispatch])

  const filteredRestaurants =
    session.filterApplied &&
    restaurants.filter((restaurant) =>
      session.filteredRestaurants.includes(restaurant.id),
    )

  const restaurantsToMap = filteredRestaurants || restaurants

  const indexOfLastRestaurant = session.currentPageNumber * restaurantsPerPage
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage
  const currentRestaurants = restaurantsToMap.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant,
  )

  console.log(session.currentPageNumber)

  const paginateHandler = (pageNumber) => {
    dispatch(setCurrentPageNumber(pageNumber))
  }

  const mappedRestaurants = currentRestaurants.map((restaurant) => {
    return <Restaurant key={uid()} restaurant={restaurant} />
  })

  return (
    <>
      <div>{mappedRestaurants}</div>
      {loading && <LoadingSpinner asOverlay />}
      <Pagination
        restaurantsPerPage={restaurantsPerPage}
        totalRestaurants={restaurantsToMap.length}
        paginate={paginateHandler}
      />
    </>
  )
}

export default Restaurants
