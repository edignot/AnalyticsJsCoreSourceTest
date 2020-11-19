import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { clearFilter, filterRestaurants } from '../../actions/session'

const Form = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector((store) => store.restaurants)

  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const searchByInput = () => {
    const filteredRestaurants = restaurants.reduce((filtered, restaurant) => {
      if (
        restaurant.name.includes(searchValue) ||
        restaurant.city.includes(searchValue) ||
        restaurant.genre.includes(searchValue)
      ) {
        filtered.push(restaurant.id)
      }
      return filtered
    }, [])
    dispatch(filterRestaurants(filteredRestaurants))
  }

  return (
    <section>
      <section>
        <input
          name='Search by restaurant name | city | genre'
          type='text'
          placeholder='Search by restaurant name | city | genre'
          onChange={handleChange}
        />
        <button onClick={searchByInput}>
          <BiSearch />
        </button>
        <button onClick={() => dispatch(clearFilter())}>CLEAR</button>
      </section>
    </section>
  )
}

export default Form
