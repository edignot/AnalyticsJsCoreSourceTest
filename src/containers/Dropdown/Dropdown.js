import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  setStateFilter,
  setGenreFilter,
  setAttireFilter,
  setCurrentPageNumber,
} from '../../actions/session'
import './Dropdown.css'

const Dropdown = ({ possibleOptions, title, type }) => {
  const dispatch = useDispatch()

  const handleSelectorChange = (e) => {
    e.target.value === '' &&
      type === 'genre' &&
      dispatch(setGenreFilter(e.target.value))

    e.target.value === '' &&
      type === 'state' &&
      dispatch(setStateFilter(e.target.value))

    e.target.value === '' &&
      type === 'attire' &&
      dispatch(setAttireFilter(e.target.value))

    type === 'genre' && dispatch(setGenreFilter(e.target.value))
    type === 'attire' && dispatch(setAttireFilter(e.target.value))
    type === 'state' && dispatch(setStateFilter(e.target.value))

    dispatch(setCurrentPageNumber(1))
    e.target.value = ''
  }

  const options = possibleOptions.map((option) => (
    <option value={option} key={option}>
      {option}
    </option>
  ))
  return (
    <select onChange={handleSelectorChange}>
      <option value=''>{title}</option>
      <option value=''>DISPLAY ALL</option>
      {options}
    </select>
  )
}

export default Dropdown

Dropdown.prototypes = {
  possibleOptions: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
}
