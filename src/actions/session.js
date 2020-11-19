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
