import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { initialStateTestData } from '../../test-data'
import Layout from './Layout'
import RestaurantsPage from '../../pages/RestaurantsPage/RestaurantsPage'

describe('Restaurant', () => {
  let LayoutComponent, store, mockStore, initialState, restaurant

  beforeEach(() => {
    initialState = initialStateTestData
    restaurant = initialStateTestData.restaurants[0]

    mockStore = configureStore()
    store = mockStore(initialState)

    LayoutComponent = render(
      <Provider store={store}>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </Provider>,
    )
  })

  it('Layout should successfully render', () => {
    const { getAllByTestId, getByText } = LayoutComponent
    expect(getByText(restaurant.name)).toBeInTheDocument()
  })

  it('Layout should successfully render Header', () => {
    const { getAllByTestId, getByText } = LayoutComponent
    expect(getByText('Restaurants Search Engine')).toBeInTheDocument()
  })

  it('Layout should successfully render Footer', () => {
    const { getAllByTestId, getByText } = LayoutComponent
    expect(
      getByText('© Restaurants Search Engine. All rights reserved.'),
    ).toBeInTheDocument()
  })
})
