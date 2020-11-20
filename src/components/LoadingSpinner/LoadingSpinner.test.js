import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialStateTestData } from '../../test-data'
import LoadingSpinner from './LoadingSpinner'

describe('Restaurant', () => {
  let LoadingSpinnerComponent, store, mockStore, initialState

  beforeEach(() => {
    initialState = initialStateTestData

    mockStore = configureStore()
    store = mockStore(initialState)

    LoadingSpinnerComponent = render(
      <Provider store={store}>
        <LoadingSpinner />,
      </Provider>,
    )
  })

  it('App should successfully render Layout ( Layouts render Header, Footer and Children components )', () => {
    const { getByTestId } = LoadingSpinnerComponent
    expect(getByTestId('spinner-container')).toBeInTheDocument()
    expect(getByTestId('spinner')).toBeInTheDocument()
  })
})
