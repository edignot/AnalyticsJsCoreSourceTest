import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Restaurant from './Restaurant'
import { initialStateTestData } from '../../test-data'

describe('Restaurant', () => {
  let RestaurantComponent, store, mockStore, initialState, restaurant

  beforeEach(() => {
    initialState = initialStateTestData
    restaurant = initialStateTestData.restaurants[0]

    mockStore = configureStore()
    store = mockStore(initialState)

    RestaurantComponent = render(
      <Provider store={store}>
        <Restaurant restaurant={restaurant} />
      </Provider>,
    )
  })

  it('Restaurant Component should successfully render', () => {
    const { getByText } = RestaurantComponent
    expect(getByText(restaurant.name)).toBeInTheDocument()

    expect(
      getByText(`${restaurant.city} , ${restaurant.state}`),
    ).toBeInTheDocument()

    expect(getByText(`+1 ${restaurant.telephone}`)).toBeInTheDocument()

    for (const genre of restaurant.genreArray) {
      expect(getByText(genre)).toBeInTheDocument()
    }

    expect(
      getByText(
        `${restaurant.address1} ${restaurant.city} ${restaurant.state} ${restaurant.zip}`,
      ),
    ).toBeInTheDocument()

    expect(getByText(restaurant.hours)).toBeInTheDocument()

    expect(getByText(restaurant.website)).toBeInTheDocument()

    for (const tag of restaurant.tagsArray) {
      expect(getByText(`# ${tag}`)).toBeInTheDocument()
    }

    expect(getByText(restaurant.attire)).toBeInTheDocument()
  })
})
