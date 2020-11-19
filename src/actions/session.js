export const filterRestaurants = (filteredRestaurants) => ({
  type: 'FILTER_RESTAURANTS',
  filteredRestaurants,
})

export const clearSearch = () => ({
  type: 'CLEAR_SEARCH',
})

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  currentPageNumber,
})

export const setGenreFilter = (genreFilter) => ({
  type: 'SET_GENRE_FILTER',
  genreFilter,
})

export const setStateFilter = (stateFilter) => ({
  type: 'SET_STATE_FILTER',
  stateFilter,
})
