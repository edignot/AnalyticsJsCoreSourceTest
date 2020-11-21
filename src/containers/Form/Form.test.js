import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { initialStateTestData } from '../../test-data'
import Form from './Form'

describe('Form', () => {
  let FormComponent, store, mockStore, initialState

  beforeEach(() => {
    initialState = initialStateTestData

    mockStore = configureStore()
    store = mockStore(initialState)

    FormComponent = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    )
  })

  it('Dropdown should successfully display given options', () => {
    const { getByText, getByTestId } = FormComponent

    expect(getByTestId('search-input')).toBeInTheDocument()

    expect(getByText('Filter by Genre')).toBeInTheDocument()

    expect(getByText('Filter by State')).toBeInTheDocument()

    expect(getByText('Filter by Attire')).toBeInTheDocument()

    expect(getByText('clear all filters')).toBeInTheDocument()
  })
})
