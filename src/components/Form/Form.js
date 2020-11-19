import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { clearFilter, filterRestaurants } from '../../actions/session'

const Form = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector((store) => store.restaurants)

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    searchValue === '' && dispatch(clearFilter())
  }, [searchValue])

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const searchHandler = () => {
    const filteredRestaurants = restaurants.reduce((filtered, restaurant) => {
      if (
        restaurant.name.toUpperCase().includes(searchValue.toUpperCase()) ||
        restaurant.city.toUpperCase().includes(searchValue.toUpperCase()) ||
        restaurant.genre.toUpperCase().includes(searchValue.toUpperCase())
      ) {
        filtered.push(restaurant.id)
      }
      return filtered
    }, [])
    dispatch(filterRestaurants(filteredRestaurants))
  }

  const clearHandler = () => {
    setSearchValue('')
    dispatch(clearFilter())
  }

  return (
    <section>
      <section>
        <input
          name='Search by restaurant name | city | genre'
          type='text'
          placeholder='Search by restaurant name | city | genre'
          onChange={handleChange}
          value={searchValue}
        />
        <button onClick={searchHandler}>
          <BiSearch />
        </button>
        <button onClick={clearHandler}>CLEAR</button>
      </section>
    </section>
  )
}

export default Form
