import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Restaurant from './Restaurant'

describe('Restaurant', () => {
  let RestaurantComponent, store, mockStore, initialState, restaurant
  beforeEach(() => {
    initialState = {
      restaurants: [
        {
          address1: 'address1',
          attire: 'attire1',
          city: 'city1',
          genre: 'genre1',
          genreArray: ['genre A', 'genre B'],
          hours: 'hours',
          id: '1',
          lat: '1',
          long: '1',
          name: 'name1',
          state: 'state1',
          tags: 'tagA,tagB',
          tagsArray: ['tagA', 'tagB'],
          telephone: '1',
          website: 'website1',
          zip: '1',
        },
        {
          address1: 'address2',
          attire: 'attire2',
          city: 'city2',
          genre: 'genre2',
          genreArray: ['genre A', 'genre B'],
          hours: 'hours',
          id: '2',
          lat: '2',
          long: '2',
          name: 'name2',
          state: 'state2',
          tags: 'tagA,tagB',
          tagsArray: ['tagA', 'tagB'],
          telephone: '2',
          website: 'website2',
          zip: '2',
        },
      ],
      session: {
        searchApplied: false,
        filteredRestaurants: [],
        currentPageNumber: 1,
        genreFilter: '',
        stateFilter: '',
        attireFilter: '',
      },
    }

    restaurant = {
      address1: 'address1',
      attire: 'attire1',
      city: 'city1',
      genre: 'genre1',
      genreArray: ['genre A', 'genre B'],
      hours: 'hours',
      id: '1',
      lat: '1',
      long: '1',
      name: 'name1',
      state: 'state1',
      tags: 'tagA,tagB',
      tagsArray: ['tagA', 'tagB'],
      telephone: '1',
      website: 'website1',
      zip: '1',
    }

    mockStore = configureStore()
    store = mockStore(initialState)

    RestaurantComponent = render(
      <Provider store={store}>
        <Restaurant restaurant={restaurant} />
      </Provider>,
    )
  })

  it('Restaurant Component should successfully render', () => {
    const { getAllByTestId, getByText } = RestaurantComponent
    expect(getByText(restaurant.name)).toBeInTheDocument()
  })
})
