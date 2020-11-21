import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialStateTestData } from '../../test-data'
import Pagination from './Pagination'

describe('Pagination', () => {
  let PaginationComponent, store, mockStore, initialState, paginateHandler

  beforeEach(() => {
    initialState = initialStateTestData

    paginateHandler = jest.fn()

    mockStore = configureStore()
    store = mockStore(initialState)

    PaginationComponent = render(
      <Provider store={store}>
        <Pagination
          restaurantsPerPage={10}
          totalRestaurants={20}
          paginate={paginateHandler}
        />
      </Provider>,
    )
  })

  it('Pagination should display correct amount of pages', () => {
    const { getByText } = PaginationComponent

    expect(getByText('1')).toBeInTheDocument()

    expect(getByText('2')).toBeInTheDocument()
  })
})
