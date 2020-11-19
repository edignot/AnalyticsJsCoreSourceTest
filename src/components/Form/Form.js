import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiSearch } from 'react-icons/bi'
import { clearSearch, filterRestaurants } from '../../actions/session'
import Dropdown from '../Dropdown/Dropdown'

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

  const clearHandler = () => {
    setSearchValue('')
    dispatch(clearSearch())
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

  console.log(genreFilterOptions)

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
      <Dropdown possibleOptions={[]} title='Filter by State' />
      <Dropdown possibleOptions={[]} title='Filter by Genre' />
    </section>
  )
}

export default Form
