import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialStateTestData } from '../../test-data'
import Dropdown from './Dropdown'

describe('Restaurant', () => {
  let DropdownComponent, store, mockStore, initialState

  beforeEach(() => {
    initialState = initialStateTestData

    mockStore = configureStore()
    store = mockStore(initialState)

    DropdownComponent = render(
      <Provider store={store}>
        <Dropdown
          possibleOptions={initialState.restaurants[0].genreArray}
          title='Filter by Genre'
        />
      </Provider>,
    )
  })

  it('Dropdown should successfully display given options', () => {
    const { getByText } = DropdownComponent

    expect(getByText('DISPLAY ALL')).toBeInTheDocument()

    expect(getByText('Filter by Genre')).toBeInTheDocument()

    for (const genre of initialState.restaurants[0].genreArray) {
      expect(getByText(genre)).toBeInTheDocument()
    }
  })
})
