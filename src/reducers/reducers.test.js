import '@testing-library/jest-dom'
import { restaurants } from './restaurants'
import { session } from './session'

describe('Reducers', () => {
  let restaurantsTestData, sessionTestData, restaurantsState, sessionState

  beforeEach(() => {
    restaurantsState = []

    sessionState = {
      searchApplied: false,
      filteredRestaurants: [],
      currentPageNumber: 1,
      genreFilter: '',
      stateFilter: '',
      attireFilter: '',
    }

    sessionTestData = {
      searchApplied: true,
      filteredRestaurants: ['1', '2'],
      currentPageNumber: 1,
      genreFilter: 'genre1',
      stateFilter: 'state1',
      attireFilter: 'attire1',
    }

    restaurantsTestData = [
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
    ]
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
