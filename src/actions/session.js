export const filterRestaurants = (filteredRestaurants) => ({
  type: 'FILTER_RESTAURANTS',
  filteredRestaurants,
})

export const clearFilter = () => ({
  type: 'CLEAR_FILTER',
})

export const setCurrentPageNumber = (currentPageNumber) => ({
  type: 'SET_CURRENT_PAGE_NUMBER',
  currentPageNumber,
})
