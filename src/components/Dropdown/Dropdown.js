import React from 'react'
import { useDispatch } from 'react-redux'
import {
  setStateFilter,
  setGenreFilter,
  setCurrentPageNumber,
} from '../../actions/session'

const Dropdown = ({ possibleOptions, title, type }) => {
  const dispatch = useDispatch()

  const handleSelectorChange = (e) => {
    e.target.value === '' &&
      type === 'genre' &&
      dispatch(setGenreFilter(e.target.value))

    e.target.value === '' &&
      type === 'state' &&
      dispatch(setStateFilter(e.target.value))

    type === 'genre' && dispatch(setGenreFilter(e.target.value))
    type === 'state' && dispatch(setStateFilter(e.target.value))

    dispatch(setCurrentPageNumber(1))
  }

  const options = possibleOptions.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ))
  return (
    <select onChange={handleSelectorChange}>
      <option value=''>{title}</option>
      {options}
    </select>
  )
}

export default Dropdown

// Reset selector filter
