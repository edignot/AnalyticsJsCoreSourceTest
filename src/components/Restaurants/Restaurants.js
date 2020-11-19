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

  let filteredRestaurants

  const searchMatches = restaurants.filter((restaurant) =>
    session.filteredRestaurants.includes(restaurant.id),
  )

  // Search, genre, state, attire filters combined
  if (
    session.searchApplied &&
    session.genreFilter &&
    session.stateFilter &&
    session.attireFilter
  ) {
    filteredRestaurants = searchMatches.filter((restaurant) => {
      if (
        restaurant.state === session.stateFilter &&
        restaurant.genreArray.includes(session.genreFilter) &&
        restaurant.attire === session.attireFilter
      ) {
        return restaurant
      }
    })

    // Search, genre, state filters combined
  } else if (
    session.searchApplied &&
    session.genreFilter &&
    session.stateFilter
  ) {
    filteredRestaurants = searchMatches.filter((restaurant) => {
      if (
        restaurant.state === session.stateFilter &&
        restaurant.genreArray.includes(session.genreFilter)
      ) {
        return restaurant
      }
    })

    // Search, genre, attire filters combined
  } else if (
    session.searchApplied &&
    session.genreFilter &&
    session.attireFilter
  ) {
    filteredRestaurants = searchMatches.filter((restaurant) => {
      if (
        restaurant.attire === session.attireFilter &&
        restaurant.genreArray.includes(session.genreFilter)
      ) {
        return restaurant
      }
    })

    // Search, state, attire filters combined
  } else if (
    session.searchApplied &&
    session.stateFilter &&
    session.attireFilter
  ) {
    filteredRestaurants = searchMatches.filter((restaurant) => {
      if (
        restaurant.attire === session.attireFilter &&
        restaurant.state === session.stateFilter
      ) {
        return restaurant
      }
    })

    // Search, genre filters applied
  } else if (session.searchApplied && session.genreFilter) {
    filteredRestaurants = searchMatches.filter((restaurant) =>
      restaurant.genreArray.includes(session.genreFilter),
    )

    // Search, state filters applied
  } else if (session.searchApplied && session.stateFilter) {
    filteredRestaurants = searchMatches.filter(
      (restaurant) => restaurant.state === session.stateFilter,
    )

    // Search, attire filters applied
  } else if (session.searchApplied && session.stateFilter) {
    filteredRestaurants = searchMatches.filter(
      (restaurant) => restaurant.attire === session.attireFilter,
    )

    // Genre, state, attire filters applied
  } else if (
    session.genreFilter &&
    session.stateFilter &&
    session.attireFilter
  ) {
    filteredRestaurants = restaurants.filter((restaurant) => {
      if (
        restaurant.state === session.stateFilter &&
        restaurant.genreArray.includes(session.genreFilter) &&
        restaurant.attire === session.attireFilter
      ) {
        return restaurant
      }
    })

    // Genre, state filters applied
  } else if (session.genreFilter && session.stateFilter) {
    filteredRestaurants = restaurants.filter((restaurant) => {
      if (
        restaurant.state === session.stateFilter &&
        restaurant.genreArray.includes(session.genreFilter)
      ) {
        return restaurant
      }
    })

    // Genre, attire filters applied
  } else if (session.genreFilter && session.attireFilter) {
    filteredRestaurants = restaurants.filter((restaurant) => {
      if (
        restaurant.attire === session.attireFilter &&
        restaurant.genreArray.includes(session.genreFilter)
      ) {
        return restaurant
      }
    })

    // State, attire filters applied
  } else if (session.stateFilter && session.attireFilter) {
    filteredRestaurants = restaurants.filter((restaurant) => {
      if (
        restaurant.attire === session.attireFilter &&
        restaurant.state === session.stateFilter
      ) {
        return restaurant
      }
    })

    // Search filter applied
  } else if (session.searchApplied) {
    filteredRestaurants = searchMatches

    // Session filter applied
  } else if (session.genreFilter) {
    filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.genreArray.includes(session.genreFilter),
    )

    // State filter applied
  } else if (session.stateFilter) {
    filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.state === session.stateFilter,
    )

    // Attire filter applied
  } else if (session.attireFilter) {
    filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.attire === session.attireFilter,
    )
  }
  const restaurantsToMap = filteredRestaurants || restaurants

  const indexOfLastRestaurant = session.currentPageNumber * restaurantsPerPage
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage
  const currentRestaurants = restaurantsToMap.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant,
  )

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
