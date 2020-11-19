const sessionTemplate = {
  searchApplied: false,
  filteredRestaurants: [],
  currentPageNumber: 1,
}

export default (session = sessionTemplate, action) => {
  switch (action.type) {
    case 'FILTER_RESTAURANTS':
      return {
        searchApplied: true,
        filteredRestaurants: action.filteredRestaurants,
        currentPageNumber: 1,
      }
    case 'CLEAR_SEARCH':
      return {
        searchApplied: false,
        filteredRestaurants: [],
        currentPageNumber: 1,
      }
    case 'SET_CURRENT_PAGE_NUMBER':
      return {
        ...session,
        currentPageNumber: action.currentPageNumber,
      }
    default:
      return session
  }
}
