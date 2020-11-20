import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { clearSearch, filterRestaurants, clearAll } from '../../actions/session'
import Dropdown from '../Dropdown/Dropdown'
import './Form.css'

const Form = () => {
  const dispatch = useDispatch()
  const restaurants = useSelector((store) => store.restaurants)
  const session = useSelector((store) => store.session)

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    searchValue === '' && dispatch(clearSearch())
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

  const handleKeyDown = (e) => {
    e.key === 'Enter' && searchHandler()
  }

  const clearHandler = () => {
    setSearchValue('')
    dispatch(clearAll())
  }

  const restaurantsToFilter = session.searchApplied
    ? restaurants.filter((restaurant) =>
        session.filteredRestaurants.includes(restaurant.id),
      )
    : restaurants

  const stateFilterOptions = restaurantsToFilter.reduce(
    (options, restaurant) => {
      !options.includes(restaurant.state) && options.push(restaurant.state)
      return options
    },
    [],
  )

  const genreFilterOptions = restaurantsToFilter.reduce(
    (options, restaurant) => {
      restaurant.genreArray.forEach(
        (genre) => !options.includes(genre) && options.push(genre),
      )
      return options
    },
    [],
  )

  const attireFilterOptions = restaurantsToFilter.reduce(
    (options, restaurant) => {
      !options.includes(restaurant.attire) && options.push(restaurant.attire)
      return options
    },
    [],
  )

  return (
    <section className='search-filter-form-container'>
      <section className='search-input-wrapper'>
        <input
          name='Search by restaurant name | city | genre'
          type='text'
          placeholder='Search by restaurant name | city | genre'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={searchValue}
          className='search-input'
        />
        <button onClick={searchHandler} className='search-button'>
          <BiSearch />
        </button>
      </section>

      <section className='filters-wrapper'>
        <Dropdown
          possibleOptions={stateFilterOptions}
          title='Filter by State'
          type='state'
        />
        <Dropdown
          possibleOptions={genreFilterOptions}
          title='Filter by Genre'
          type='genre'
        />
        <Dropdown
          possibleOptions={attireFilterOptions}
          title='Filter by Attire'
          type='attire'
        />
      </section>

      <section>
        <button onClick={clearHandler} className='clear-all-filter-button'>
          clear all filters
        </button>
      </section>
    </section>
  )
}

export default Form
