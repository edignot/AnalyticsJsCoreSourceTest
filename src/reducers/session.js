const sessionTemplate = {
  searchApplied: false,
  filteredRestaurants: [],
  currentPageNumber: 1,
  genreFilter: '',
  stateFilter: '',
  attireFilter: '',
}

export default (session = sessionTemplate, action) => {
  switch (action.type) {
    case 'FILTER_RESTAURANTS':
      return {
        ...session,
        searchApplied: true,
        filteredRestaurants: action.filteredRestaurants,
        currentPageNumber: 1,
      }
    case 'CLEAR_SEARCH':
      return {
        searchApplied: false,
        filteredRestaurants: [],
        currentPageNumber: 1,
        genreFilter: '',
        stateFilter: '',
        attireFilter: '',
      }
    case 'SET_CURRENT_PAGE_NUMBER':
      return {
        ...session,
        currentPageNumber: action.currentPageNumber,
      }
    case 'SET_GENRE_FILTER':
      return {
        ...session,
        genreFilter: action.genreFilter,
      }
    case 'SET_STATE_FILTER':
      return {
        ...session,
        stateFilter: action.stateFilter,
      }
    case 'SET_ATTIRE_FILTER':
      return {
        ...session,
        attireFilter: action.attireFilter,
      }
    default:
      return session
  }
}
