import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul className='pages-wrapper'>
      {pageNumbers.map((number) => (
        <li
          key={number}
          className='page-item'
          onClick={() => {
            paginate(number)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <p>{number}</p>
        </li>
      ))}
    </ul>
  )
}

export default Pagination

Pagination.propTypes = {
  restaurantsPerPage: PropTypes.number,
  totalRestaurants: PropTypes.number,
  paginate: PropTypes.func,
}
