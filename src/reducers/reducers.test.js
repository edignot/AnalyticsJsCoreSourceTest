import '@testing-library/jest-dom'
import { restaurants } from './restaurants'
import { session } from './session'
import { initialStateTestData } from '../test-data'

describe('Reducers', () => {
  let restaurantsTestData, sessionTestData, restaurantsState, sessionState

  beforeEach(() => {
    restaurantsState = []

    sessionState = initialStateTestData.session

    sessionTestData = {
      searchApplied: true,
      filteredRestaurants: ['1', '2'],
      currentPageNumber: 1,
      genreFilter: 'genre1',
      stateFilter: 'state1',
      attireFilter: 'attire1',
    }

    restaurantsTestData = initialStateTestData.restaurants
  })

  it('should return restaurants state with updated restaurants info', () => {
    const action = {
      type: 'FETCH_RESTAURANTS',
      restaurantsSortedByName: restaurantsTestData,
    }
    const result = restaurants(restaurantsState, action)
    expect(result).toEqual(restaurantsTestData)
  })

  it('should return session state with filtered restaurants info', () => {
    const action = {
      type: 'FILTER_RESTAURANTS',
      filteredRestaurants: sessionTestData.filteredRestaurants,
    }
    const result = session(sessionState, action)
    expect(result).toEqual({
      ...sessionState,
      currentPageNumber: 1,
      searchApplied: true,
      filteredRestaurants: sessionTestData.filteredRestaurants,
    })
  })

  it('should return session state with cleared searched', () => {
    const action = {
      type: 'CLEAR_SEARCH',
    }
    const result = session(
      { ...sessionState, genreFilter: sessionTestData.genreFilter },
      action,
    )
    expect(result).toEqual({
      ...sessionState,
      genreFilter: sessionTestData.genreFilter,
    })
  })

  it('should return session state with cleared session info', () => {
    const action = {
      type: 'CLEAR_ALL',
    }
    const result = session(sessionTestData, action)
    expect(result).toEqual(sessionState)
  })

  it('should return session state with updated current page number', () => {
    const action = {
      type: 'SET_CURRENT_PAGE_NUMBER',
      currentPageNumber: 3,
    }
    const result = session(sessionState, action)
    expect(result).toEqual({ ...sessionState, currentPageNumber: 3 })
  })

  it('should return session state with updated genre filter', () => {
    const action = {
      type: 'SET_GENRE_FILTER',
      genreFilter: sessionTestData.genreFilter,
    }
    const result = session(sessionState, action)
    expect(result).toEqual({
      ...sessionState,
      genreFilter: sessionTestData.genreFilter,
    })
  })

  it('should return session state with updated state filter', () => {
    const action = {
      type: 'SET_STATE_FILTER',
      stateFilter: sessionTestData.stateFilter,
    }
    const result = session(sessionState, action)
    expect(result).toEqual({
      ...sessionState,
      stateFilter: sessionTestData.stateFilter,
    })
  })

  it('should return session state with updated attire filter', () => {
    const action = {
      type: 'SET_ATTIRE_FILTER',
      attireFilter: sessionTestData.attireFilter,
    }
    const result = session(sessionState, action)
    expect(result).toEqual({
      ...sessionState,
      attireFilter: sessionTestData.attireFilter,
    })
  })
})
