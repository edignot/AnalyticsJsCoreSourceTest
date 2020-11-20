import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialStateTestData } from '../../test-data'
import App from './App'

describe('Restaurant', () => {
  let AppComponent, store, mockStore, initialState, restaurant

  beforeEach(() => {
    initialState = initialStateTestData
    restaurant = initialStateTestData.restaurants[0]

    mockStore = configureStore()
    store = mockStore(initialState)

    AppComponent = render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
  })

  it('App should successfully render Layout ( Layouts render Header, Footer and Children components )', () => {
    const { getByText } = AppComponent
    expect(getByText(restaurant.name)).toBeInTheDocument()
  })
})
