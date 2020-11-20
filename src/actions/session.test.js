import * as actions from './session'

describe('Session Actions', () => {
  let filteredRestaurants,
    currentPageNumber,
    genreFilter,
    stateFilter,
    attireFilter

  beforeEach(() => {
    filteredRestaurants = ['1', '2']
    currentPageNumber = 2
    genreFilter = 'genre'
    stateFilter = 'state'
    attireFilter = 'attire'
  })

  it('should have a type FILTER_RESTAURANTS', () => {
    const action = {
      type: 'FILTER_RESTAURANTS',
      filteredRestaurants,
    }
    const result = actions.filterRestaurants(filteredRestaurants)
    expect(result).toEqual(action)
  })

  it('should have a type CLEAR_SEARCH', () => {
    const action = {
      type: 'CLEAR_SEARCH',
    }
    const result = actions.clearSearch()
    expect(result).toEqual(action)
  })

  it('should have a type CLEAR_ALL', () => {
    const action = {
      type: 'CLEAR_ALL',
    }
    const result = actions.clearAll()
    expect(result).toEqual(action)
  })

  it('should have a type SET_CURRENT_PAGE_NUMBER', () => {
    const action = {
      type: 'SET_CURRENT_PAGE_NUMBER',
      currentPageNumber,
    }
    const result = actions.setCurrentPageNumber(currentPageNumber)
    expect(result).toEqual(action)
  })

  it('should have a type SET_GENRE_FILTER', () => {
    const action = {
      type: 'SET_GENRE_FILTER',
      genreFilter,
    }
    const result = actions.setGenreFilter(genreFilter)
    expect(result).toEqual(action)
  })

  it('should have a type SET_STATE_FILTER', () => {
    const action = {
      type: 'SET_STATE_FILTER',
      stateFilter,
    }
    const result = actions.setStateFilter(stateFilter)
    expect(result).toEqual(action)
  })

  it('should have a type SET_ATTIRE_FILTER', () => {
    const action = {
      type: 'SET_ATTIRE_FILTER',
      attireFilter,
    }
    const result = actions.setAttireFilter(attireFilter)
    expect(result).toEqual(action)
  })
})
