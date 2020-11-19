import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

const Pagination = ({ restaurantsPerPage, totalRestaurants, paginate }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination

Pagination.propTypes = {
  restaurantsPerPage: PropTypes.number,
  totalRestaurants: PropTypes.number,
  paginate: PropTypes.func,
}
